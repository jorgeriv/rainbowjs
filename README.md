# rainbow
Rainbow.js is a library to programatically generate a color palette to use in automated template generators and other applications.
## Known Bugs
* Some times when a new schema is created, colors apart from main color don't get created.
(Seems like this happens when primary colors of the main color are too small or to big ej. 0, 255);

## Road Map

### Version 1.0

### Functionality
* Add hability to name colors
* Add hability to get color JSON
* Add hability to name Schemas
* Add hability to get schema JSON
* Add 'createSchema' method to Color objects
* Add 'getShades' method to Color objects
* Add 'getTints' method to Color objects
* Add 'getTones' method to Color objects
* Create 'point generator functions'
* Create generator presets
* Add Schema presets
* Add colors presets (css color names)

### Refactoring
* Change 'schema' to 'schema' in all code
* Rename 'Schema' constructor to 'Schema'

### Other
* Add unit tests
* Create project website
* Create documentation
* Create build script
* Create code examples
* Add as a bower component (Nice to have: add to other package managers)
* Create CONTRIBUTING.md file
