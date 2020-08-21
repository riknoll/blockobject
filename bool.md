# boolean blocks

## get boolean property

```sig
blockObject.getBooleanProperty(blockObject.create(), blockObject._boolProperty(BoolProp.myBool))
```

Reads a property of type boolean that is stored inside a BlockObject using the given BoolProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the BoolProp to read


## has boolean property

```sig
blockObject.hasBooleanProperty(blockObject.create(), blockObject._boolProperty(BoolProp.myBool))
```

Checks to see if a property of type boolean is stored inside a BlockObject using the given BoolProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the BoolProp to check for existence


## set boolean property

```sig
blockObject.setBooleanProperty(blockObject.create(), blockObject._boolProperty(BoolProp.myBool), false)
```

Sets a property of type boolean on the given BlockObject using the given BoolProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the BoolProp to set
* **value**: the value to store for this BoolProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
