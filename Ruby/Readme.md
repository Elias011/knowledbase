# Some knowledge about Ruby

### Impotr from module functions in Ruby 
module example in Ruby:

create a file with any name like "example_module".rb

```
module exampleHelper

  def self.function1 
    p "test1"
  end

  def self.function2
    p "test2"
  end

  def self.function3
    p "test3"
  end
```

To import some functions from this module we do like this 
create a file with any name like "example_import".rb

```
require "example_module"

exampleHelper.function1

```
output is :

```
test1 
```
**self means: that this function is generated as a global function**