#!/bin/bash
# -v: verbose
# -a: archive
# -z: enables compression

rsync -apmvz --copy-links --exclude=.git/ --exclude=*.bash* * mjs3@arizona.princeton.edu:~/public_html/soc596_f2016
