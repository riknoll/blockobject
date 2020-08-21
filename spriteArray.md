# spriteArray blocks

## get spriteArray property

```sig
blockObject.getSpriteArrayProperty(blockObject.create(), blockObject._spriteArrayProperty(SpriteArrayProp.mySpriteArray))
```

Reads a property of type Sprite[] that is stored inside a BlockObject using the given SpriteArrayProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the SpriteArrayProp to read


## has spriteArray property

```sig
blockObject.hasSpriteArrayProperty(blockObject.create(), blockObject._spriteArrayProperty(SpriteArrayProp.mySpriteArray))
```

Checks to see if a property of type Sprite[] is stored inside a BlockObject using the given SpriteArrayProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the SpriteArrayProp to check for existence


## set spriteArray property

```sig
blockObject.setSpriteArrayProperty(blockObject.create(), blockObject._spriteArrayProperty(SpriteArrayProp.mySpriteArray), null)
```

Sets a property of type Sprite[] on the given BlockObject using the given SpriteArrayProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the SpriteArrayProp to set
* **value**: the value to store for this SpriteArrayProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
