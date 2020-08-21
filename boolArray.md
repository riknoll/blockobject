# booleanArray blocks

## get booleanArray property

```sig
blockObject.getBooleanArrayProperty(blockObject.create(), blockObject._boolArrayProperty(BoolArrayProp.myBoolArray))
```

Reads a property of type boolean[] that is stored inside a BlockObject using the given BoolArrayProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the BoolArrayProp to read


## has booleanArray property

```sig
blockObject.hasBooleanArrayProperty(blockObject.create(), blockObject._boolArrayProperty(BoolArrayProp.myBoolArray))
```

Checks to see if a property of type boolean[] is stored inside a BlockObject using the given BoolArrayProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the BoolArrayProp to check for existence


## set booleanArray property

```sig
blockObject.setBooleanArrayProperty(blockObject.create(), blockObject._boolArrayProperty(BoolArrayProp.myBoolArray), logic_boolean)
```

Sets a property of type boolean[] on the given BlockObject using the given BoolArrayProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the BoolArrayProp to set
* **value**: the value to store for this BoolArrayProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
