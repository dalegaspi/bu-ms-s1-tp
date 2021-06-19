# justfile
#
# author: dlegaspi@bu.edu

dev-hash:
    @echo 'copying dev-hash/config.js'
    @cp config/dev-hash/config.js js/config.js

dev-html5:
    @echo 'copying dev-html5/config.js'
    @cp config/dev-html5/config.js js/config.js

prod:
    @echo 'copying prod/config.js'
    @cp config/prod/config.js js/config.js