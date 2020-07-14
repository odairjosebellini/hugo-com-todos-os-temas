import search from './search'
import createPatternAlphabet from './createPatternAlphabet'
import { MAX_BITS } from './constants'
import Config from '../../core/config'

export default class BitapSearch {
  constructor(
    pattern,
    {
      location = Config.location,
      threshold = Config.threshold,
      distance = Config.distance,
      includeMatches = Config.includeMatches,
      findAllMatches = Config.findAllMatches,
      minMatchCharLength = Config.minMatchCharLength,
      isCaseSensitive = Config.isCaseSensitive
    } = {}
  ) {
    this.options = {
      location,
      threshold,
      distance,
      includeMatches,
      findAllMatches,
      minMatchCharLength,
      isCaseSensitive
    }

    this.pattern = isCaseSensitive ? pattern : pattern.toLowerCase()

    this.chunks = []

    let index = 0
    while (index < this.pattern.length) {
      let pattern = this.pattern.substring(index, index + MAX_BITS)
      this.chunks.push({
        pattern,
        alphabet: createPatternAlphabet(pattern)
      })
      index += MAX_BITS
    }
  }

  searchIn(value) {
    let text = value.$
    return this.searchInString(text)
  }

  searchInString(text) {
    const { isCaseSensitive, includeMatches } = this.options

    if (!isCaseSensitive) {
      text = text.toLowerCase()
    }

    // Exact match
    if (this.pattern === text) {
      let result = {
        isMatch: true,
        score: 0
      }

      if (includeMatches) {
        result.matchedIndices = [[0, text.length - 1]]
      }

      return result
    }

    // Otherwise, use Bitap algorithm
    const {
      location,
      distance,
      threshold,
      findAllMatches,
      minMatchCharLength
    } = this.options

    let allMatchedIndices = []
    let totalScore = 0
    let hasMatches = false

    for (let i = 0, len = this.chunks.length; i < len; i += 1) {
      let { pattern, alphabet } = this.chunks[i]

      let result = search(text, pattern, alphabet, {
        location: location + MAX_BITS * i,
        distance,
        threshold,
        findAllMatches,
        minMatchCharLength,
        includeMatches
      })

      const { isMatch, score, matchedIndices } = result

      if (isMatch) {
        hasMatches = true
      }

      totalScore += score

      if (isMatch && matchedIndices) {
        allMatchedIndices = [...allMatchedIndices, ...matchedIndices]
      }
    }

    let result = {
      isMatch: hasMatches,
      score: hasMatches ? totalScore / this.chunks.length : 1
    }

    if (hasMatches && includeMatches) {
      result.matchedIndices = allMatchedIndices
    }

    return result
  }
}
