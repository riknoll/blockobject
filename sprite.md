# sprite blocks

## get sprite property

```sig
blockObject.getSpriteProperty(blockObject.create(), blockObject._spriteProperty(SpriteProp.mySprite))
```

Reads a property of type Sprite that is stored inside a BlockObject using the given SpriteProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the SpriteProp to read


## has sprite property

```sig
blockObject.hasSpriteProperty(blockObject.create(), blockObject._spriteProperty(SpriteProp.mySprite))
```

Checks to see if a property of type Sprite is stored inside a BlockObject using the given SpriteProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the SpriteProp to check for existence


## set sprite property

```sig
blockObject.setSpriteProperty(blockObject.create(), blockObject._spriteProperty(SpriteProp.mySprite), mySprite)
```

Sets a property of type Sprite on the given BlockObject using the given SpriteProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the SpriteProp to set
* **value**: the value to store for this SpriteProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
