# imageArray blocks

## get imageArray property

```sig
blockObject.getImageArrayProperty(blockObject.create(), blockObject._imageArrayProperty(ImageArrayProp.myImageArray))
```

Reads a property of type Image[] that is stored inside a BlockObject using the given ImageArrayProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the ImageArrayProp to read


## has imageArray property

```sig
blockObject.hasImageArrayProperty(blockObject.create(), blockObject._imageArrayProperty(ImageArrayProp.myImageArray))
```

Checks to see if a property of type Image[] is stored inside a BlockObject using the given ImageArrayProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the ImageArrayProp to check for existence


## set imageArray property

```sig
blockObject.setImageArrayProperty(blockObject.create(), blockObject._imageArrayProperty(ImageArrayProp.myImageArray), screen_image_picker)
```

Sets a property of type Image[] on the given BlockObject using the given ImageArrayProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the ImageArrayProp to set
* **value**: the value to store for this ImageArrayProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
