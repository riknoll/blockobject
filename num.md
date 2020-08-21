# number blocks

## get number property

```sig
blockObject.getNumberProperty(blockObject.create(), blockObject._numProperty(NumProp.myNum))
```

Reads a property of type number that is stored inside a BlockObject using the given NumProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the NumProp to read


## has number property

```sig
blockObject.hasNumberProperty(blockObject.create(), blockObject._numProperty(NumProp.myNum))
```

Checks to see if a property of type number is stored inside a BlockObject using the given NumProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the NumProp to check for existence


## set number property

```sig
blockObject.setNumberProperty(blockObject.create(), blockObject._numProperty(NumProp.myNum), 0)
```

Sets a property of type number on the given BlockObject using the given NumProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the NumProp to set
* **value**: the value to store for this NumProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
