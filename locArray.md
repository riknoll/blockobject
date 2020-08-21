# locationArray blocks

## get locationArray property

```sig
blockObject.getLocationArrayProperty(blockObject.create(), blockObject._locArrayProperty(LocArrayProp.myLocArray))
```

Reads a property of type tiles.Location[] that is stored inside a BlockObject using the given LocArrayProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the LocArrayProp to read


## has locationArray property

```sig
blockObject.hasLocationArrayProperty(blockObject.create(), blockObject._locArrayProperty(LocArrayProp.myLocArray))
```

Checks to see if a property of type tiles.Location[] is stored inside a BlockObject using the given LocArrayProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the LocArrayProp to check for existence


## set locationArray property

```sig
blockObject.setLocationArrayProperty(blockObject.create(), blockObject._locArrayProperty(LocArrayProp.myLocArray), mapgettile)
```

Sets a property of type tiles.Location[] on the given BlockObject using the given LocArrayProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the LocArrayProp to set
* **value**: the value to store for this LocArrayProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
