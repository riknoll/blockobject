# any blocks

## get any property

```sig
blockObject.getAnyProperty(blockObject.create(), blockObject._anyProperty(AnyProp.myAny))
```

Reads a property of type any that is stored inside a BlockObject using the given AnyProp.

### Parameters

* **object**: the BlockObject to read the property from
* **property**: the AnyProp to read


## has any property

```sig
blockObject.hasAnyProperty(blockObject.create(), blockObject._anyProperty(AnyProp.myAny))
```

Checks to see if a property of type any is stored inside a BlockObject using the given AnyProp.

### Parameters

* **object**: the BlockObject to check the property from
* **property**: the AnyProp to check for existence


## set any property

```sig
blockObject.setAnyProperty(blockObject.create(), blockObject._anyProperty(AnyProp.myAny), null)
```

Sets a property of type any on the given BlockObject using the given AnyProp.

### Parameters

* **object**: the BlockObject to set the property on
* **property**: the AnyProp to set
* **value**: the value to store for this AnyProp in the BlockObject

```package
blockObject=github:riknoll/blockobject
```
