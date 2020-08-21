# location blocks

## get location property

```sig
blockObject.getLocationProperty(blockObject.create(), blockObject._locProperty(LocProp.myLoc))
```

Reads a property of type tiles.Location that is stored inside a BlockObject using the given LocProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the LocProp to read


## has location property

```sig
blockObject.hasLocationProperty(blockObject.create(), blockObject._locProperty(LocProp.myLoc))
```

Checks to see if a property of type tiles.Location is stored inside a BlockObject using the given LocProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the LocProp to check for existence


## set location property

```sig
blockObject.setLocationProperty(blockObject.create(), blockObject._locProperty(LocProp.myLoc), null)
```

Sets a property of type tiles.Location on the given BlockObject using the given LocProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the LocProp to set
* **value**: the value to store for this LocProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
