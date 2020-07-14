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


if ! sass-lint -qv --max-warnings 1; then
	echo "FAIL: Linting (SASS/SCSS) fails"
	exit 3
else
	echo "PASS: Linting (SASS/SCSS) succeeds"
fi

exit 0
