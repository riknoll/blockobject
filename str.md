# string blocks

## get string property

```sig
blockObject.getStringProperty(blockObject.create(), blockObject._strProperty(StrProp.myStr))
```

Reads a property of type string that is stored inside a BlockObject using the given StrProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the StrProp to read


## has string property

```sig
blockObject.hasStringProperty(blockObject.create(), blockObject._strProperty(StrProp.myStr))
```

Checks to see if a property of type string is stored inside a BlockObject using the given StrProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the StrProp to check for existence


## set string property

```sig
blockObject.setStringProperty(blockObject.create(), blockObject._strProperty(StrProp.myStr), '')
```

Sets a property of type string on the given BlockObject using the given StrProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the StrProp to set
* **value**: the value to store for this StrProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
