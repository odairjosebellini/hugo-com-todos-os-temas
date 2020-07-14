#!/bin/sh

TS=PASS

if [ -n "$(command -v hugo-basic)" ]; then
	hugo-basic || TS=FAIL
else
	hugo || TS=FAIL
fi

echo "$TS: Generate site with Hugo"

if [ "$TS" = "FAIL" ]; then
	OTS=FAIL
	exit 3
fi

exit 0
