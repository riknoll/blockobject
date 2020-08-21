# stringArray blocks

## get stringArray property

```sig
blockObject.getStringArrayProperty(blockObject.create(), blockObject._strArrayProperty(StrArrayProp.myStrArray))
```

Reads a property of type string[] that is stored inside a BlockObject using the given StrArrayProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the StrArrayProp to read


## has stringArray property

```sig
blockObject.hasStringArrayProperty(blockObject.create(), blockObject._strArrayProperty(StrArrayProp.myStrArray))
```

Checks to see if a property of type string[] is stored inside a BlockObject using the given StrArrayProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the StrArrayProp to check for existence


## set stringArray property

```sig
blockObject.setStringArrayProperty(blockObject.create(), blockObject._strArrayProperty(StrArrayProp.myStrArray), text)
```

Sets a property of type string[] on the given BlockObject using the given StrArrayProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the StrArrayProp to set
* **value**: the value to store for this StrArrayProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
