# numberArray blocks

## get numberArray property

```sig
blockObject.getNumberArrayProperty(blockObject.create(), blockObject._numArrayProperty(NumArrayProp.myNumArray))
```

Reads a property of type number[] that is stored inside a BlockObject using the given NumArrayProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the NumArrayProp to read


## has numberArray property

```sig
blockObject.hasNumberArrayProperty(blockObject.create(), blockObject._numArrayProperty(NumArrayProp.myNumArray))
```

Checks to see if a property of type number[] is stored inside a BlockObject using the given NumArrayProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the NumArrayProp to check for existence


## set numberArray property

```sig
blockObject.setNumberArrayProperty(blockObject.create(), blockObject._numArrayProperty(NumArrayProp.myNumArray), math_number)
```

Sets a property of type number[] on the given BlockObject using the given NumArrayProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the NumArrayProp to set
* **value**: the value to store for this NumArrayProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
