#!/bin/sh
#
# hugo-oldnew-mashup test framework
#
#    Copyright (C) 2019 Daniel F. Dickinson <cshored@thecshore.com>
#
#    This program is free software: you can redistribute it and/or modify
#    it under the terms of the GNU General Public License as published by
#    the Free Software Foundation, either version 3 of the License, or
#    (at your option) any later version.
#
#    This program is distributed in the hope that it will be useful,
#    but WITHOUT ANY WARRANTY; without even the implied warranty of
#    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
#    GNU General Public License for more details.
#
#    You should have received a copy of the GNU General Public License
#    along with this program.  If not, see <http://www.gnu.org/licenses/>.
#

OTS=SUCCESS

htfiles="$(find public -name '*.html' -print)"

for htfile in $htfiles; do
	if grep -q 'meta http-equiv="refresh' $htfile; then
		echo "SKIP: Linting (tidy) for $htfile; it's an alias (meta refresh only)"
	elif ! tidy -o /dev/null -q --drop-empty-elements no --indent auto $htfile; then
		echo "FAIL: Linting (tidy) for $htfile"
		exit 3
	fi
done

echo "PASS: Linting (tidy)"

exit 0
