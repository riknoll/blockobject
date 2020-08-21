# image blocks

## get image property

```sig
blockObject.getImageProperty(blockObject.create(), blockObject._imageProperty(ImageProp.myImage))
```

Reads a property of type Image that is stored inside a BlockObject using the given ImageProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the ImageProp to read


## has image property

```sig
blockObject.hasImageProperty(blockObject.create(), blockObject._imageProperty(ImageProp.myImage))
```

Checks to see if a property of type Image is stored inside a BlockObject using the given ImageProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the ImageProp to check for existence


## set image property

```sig
blockObject.setImageProperty(blockObject.create(), blockObject._imageProperty(ImageProp.myImage), null)
```

Sets a property of type Image on the given BlockObject using the given ImageProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the ImageProp to set
* **value**: the value to store for this ImageProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
