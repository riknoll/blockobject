namespace blockObject {
    export interface BlockObject {
    }

    //% blockId=blockObject_create
    //% block="create empty object"
    export function create(): BlockObject {
        return {};
    }

    //% blockId=blockObject_storeOnSprite
    //% block="store $obj on $sprite"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% sprite.shadow="variables_get" sprite.defl="mySprite"
    export function storeOnSprite(obj: BlockObject, sprite: Sprite) {
        if (!sprite.data) sprite.data = {};
        sprite.data["0objectStore"] = obj;
    }

    //% blockId=blockObject_getFromSprite
    //% block="get object stored in $sprite"
    //% sprite.shadow="variables_get" sprite.defl="mySprite"
    export function getStoredObject(sprite: Sprite) {
        if (!sprite.data) sprite.data = {};
        return sprite.data["0objectStore"];
    }
}


namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_numberProp
    //% kindNamespace=NumProp
    //% kindPromptHint="e.g. myNumber"
    export function _numProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type number from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_numberProp
    //% block="$obj get number $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberProp
    export function getNumberProperty(obj: BlockObject, property: number): number {
        return (obj as any)["0num" + property] as number;
    }
    
    /**
     * See if an object has a property of type number
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_numberProp
    //% block="$obj has number property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberProp
    export function hasNumberProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0num" + property] !== undefined;
    }

    /**
     * Set a property of type number on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_numberProp
    //% block="$obj set number $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberProp
    //% value.shadow="math_number"
    
    export function setNumberProperty(obj: BlockObject, property: number, value: number): void {
        (obj as any)["0num" + property] = value;
    }
}   

namespace NumProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const num = create();
}    
    
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_numberArrayProp
    //% kindNamespace=NumArrayProp
    //% kindPromptHint="e.g. myNumberArray"
    export function _numArrayProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type number [] from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_numberArrayProp
    //% block="$obj get numberArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberArrayProp
    export function getNumberArrayProperty(obj: BlockObject, property: number): number [] {
        return (obj as any)["0numArray" + property] as number [];
    }
    
    /**
     * See if an object has a property of type number []
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_numberArrayProp
    //% block="$obj has numberArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberArrayProp
    export function hasNumberArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0numArray" + property] !== undefined;
    }

    /**
     * Set a property of type number [] on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_numberArrayProp
    //% block="$obj set numberArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_numberArrayProp
    //% value.shadow="lists_create_with"
    //% value.defl="math_number"
    export function setNumberArrayProperty(obj: BlockObject, property: number, value: number []): void {
        (obj as any)["0numArray" + property] = value;
    }
}   

namespace NumArrayProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const numArray = create();
}    
    
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_booleanProp
    //% kindNamespace=BoolProp
    //% kindPromptHint="e.g. myBool"
    export function _boolProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type boolean from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_booleanProp
    //% block="$obj get boolean $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanProp
    export function getBooleanProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0bool" + property] as boolean;
    }
    
    /**
     * See if an object has a property of type boolean
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_booleanProp
    //% block="$obj has boolean property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanProp
    export function hasBooleanProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0bool" + property] !== undefined;
    }

    /**
     * Set a property of type boolean on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_booleanProp
    //% block="$obj set boolean $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanProp
    //% value.shadow="logic_boolean"
    
    export function setBooleanProperty(obj: BlockObject, property: number, value: boolean): void {
        (obj as any)["0bool" + property] = value;
    }
}   

namespace BoolProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const bool = create();
}    
    
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_booleanArrayProp
    //% kindNamespace=BoolArrayProp
    //% kindPromptHint="e.g. myBoolArray"
    export function _boolArrayProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type boolean [] from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_booleanArrayProp
    //% block="$obj get booleanArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanArrayProp
    export function getBooleanArrayProperty(obj: BlockObject, property: number): boolean [] {
        return (obj as any)["0boolArray" + property] as boolean [];
    }
    
    /**
     * See if an object has a property of type boolean []
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_booleanArrayProp
    //% block="$obj has booleanArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanArrayProp
    export function hasBooleanArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0boolArray" + property] !== undefined;
    }

    /**
     * Set a property of type boolean [] on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_booleanArrayProp
    //% block="$obj set booleanArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_booleanArrayProp
    //% value.shadow="lists_create_with"
    //% value.defl="logic_boolean"
    export function setBooleanArrayProperty(obj: BlockObject, property: number, value: boolean []): void {
        (obj as any)["0boolArray" + property] = value;
    }
}   

namespace BoolArrayProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const boolArray = create();
}    
    
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_stringProp
    //% kindNamespace=StrProp
    //% kindPromptHint="e.g. myString"
    export function _strProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type string from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_stringProp
    //% block="$obj get string $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringProp
    export function getStringProperty(obj: BlockObject, property: number): string {
        return (obj as any)["0str" + property] as string;
    }
    
    /**
     * See if an object has a property of type string
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_stringProp
    //% block="$obj has string property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringProp
    export function hasStringProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0str" + property] !== undefined;
    }

    /**
     * Set a property of type string on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_stringProp
    //% block="$obj set string $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringProp
    //% value.shadow="text"
    
    export function setStringProperty(obj: BlockObject, property: number, value: string): void {
        (obj as any)["0str" + property] = value;
    }
}   

namespace StrProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const str = create();
}    
    
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_stringArrayProp
    //% kindNamespace=StrArrayProp
    //% kindPromptHint="e.g. myStringArray"
    export function _strArrayProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type string [] from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_stringArrayProp
    //% block="$obj get stringArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringArrayProp
    export function getStringArrayProperty(obj: BlockObject, property: number): string [] {
        return (obj as any)["0strArray" + property] as string [];
    }
    
    /**
     * See if an object has a property of type string []
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_stringArrayProp
    //% block="$obj has stringArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringArrayProp
    export function hasStringArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0strArray" + property] !== undefined;
    }

    /**
     * Set a property of type string [] on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_stringArrayProp
    //% block="$obj set stringArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_stringArrayProp
    //% value.shadow="lists_create_with"
    //% value.defl="text"
    export function setStringArrayProperty(obj: BlockObject, property: number, value: string []): void {
        (obj as any)["0strArray" + property] = value;
    }
}   

namespace StrArrayProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const strArray = create();
}    
    
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_spriteProp
    //% kindNamespace=SpriteProp
    //% kindPromptHint="e.g. mySprite"
    export function _spriteProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type Sprite from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_spriteProp
    //% block="$obj get sprite $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteProp
    export function getSpriteProperty(obj: BlockObject, property: number): Sprite {
        return (obj as any)["0sprite" + property] as Sprite;
    }
    
    /**
     * See if an object has a property of type Sprite
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_spriteProp
    //% block="$obj has sprite property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteProp
    export function hasSpriteProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0sprite" + property] !== undefined;
    }

    /**
     * Set a property of type Sprite on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_spriteProp
    //% block="$obj set sprite $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteProp
    //% value.shadow="variables_get"
    //% value.defl="mySprite"
    export function setSpriteProperty(obj: BlockObject, property: number, value: Sprite): void {
        (obj as any)["0sprite" + property] = value;
    }
}   

namespace SpriteProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const sprite = create();
}    
    
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_spriteArrayProp
    //% kindNamespace=SpriteArrayProp
    //% kindPromptHint="e.g. mySpriteArray"
    export function _spriteArrayProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type Sprite [] from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_spriteArrayProp
    //% block="$obj get spriteArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteArrayProp
    export function getSpriteArrayProperty(obj: BlockObject, property: number): Sprite [] {
        return (obj as any)["0spriteArray" + property] as Sprite [];
    }
    
    /**
     * See if an object has a property of type Sprite []
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_spriteArrayProp
    //% block="$obj has spriteArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteArrayProp
    export function hasSpriteArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0spriteArray" + property] !== undefined;
    }

    /**
     * Set a property of type Sprite [] on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_spriteArrayProp
    //% block="$obj set spriteArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_spriteArrayProp
    //% value.shadow="lists_create_with"
    
    export function setSpriteArrayProperty(obj: BlockObject, property: number, value: Sprite []): void {
        (obj as any)["0spriteArray" + property] = value;
    }
}   

namespace SpriteArrayProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const spriteArray = create();
}    
    
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_imageProp
    //% kindNamespace=ImageProp
    //% kindPromptHint="e.g. myImage"
    export function _imageProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type Image from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_imageProp
    //% block="$obj get image $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageProp
    export function getImageProperty(obj: BlockObject, property: number): Image {
        return (obj as any)["0image" + property] as Image;
    }
    
    /**
     * See if an object has a property of type Image
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_imageProp
    //% block="$obj has image property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageProp
    export function hasImageProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0image" + property] !== undefined;
    }

    /**
     * Set a property of type Image on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_imageProp
    //% block="$obj set image $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageProp
    //% value.shadow="screen_image_picker"
    
    export function setImageProperty(obj: BlockObject, property: number, value: Image): void {
        (obj as any)["0image" + property] = value;
    }
}   

namespace ImageProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const image = create();
}    
    
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_imageArrayProp
    //% kindNamespace=ImageArrayProp
    //% kindPromptHint="e.g. myImageArray"
    export function _imageArrayProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type Image [] from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_imageArrayProp
    //% block="$obj get imageArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageArrayProp
    export function getImageArrayProperty(obj: BlockObject, property: number): Image [] {
        return (obj as any)["0imageArray" + property] as Image [];
    }
    
    /**
     * See if an object has a property of type Image []
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_imageArrayProp
    //% block="$obj has imageArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageArrayProp
    export function hasImageArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0imageArray" + property] !== undefined;
    }

    /**
     * Set a property of type Image [] on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_imageArrayProp
    //% block="$obj set imageArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_imageArrayProp
    //% value.shadow="lists_create_with"
    //% value.defl="screen_image_picker"
    export function setImageArrayProperty(obj: BlockObject, property: number, value: Image []): void {
        (obj as any)["0imageArray" + property] = value;
    }
}   

namespace ImageArrayProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const imageArray = create();
}    
    
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_locationProp
    //% kindNamespace=LocProp
    //% kindPromptHint="e.g. myLocation"
    export function _locProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type tiles.Location from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_locationProp
    //% block="$obj get location $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationProp
    export function getLocationProperty(obj: BlockObject, property: number): tiles.Location {
        return (obj as any)["0loc" + property] as tiles.Location;
    }
    
    /**
     * See if an object has a property of type tiles.Location
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_locationProp
    //% block="$obj has location property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationProp
    export function hasLocationProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0loc" + property] !== undefined;
    }

    /**
     * Set a property of type tiles.Location on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_locationProp
    //% block="$obj set location $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationProp
    //% value.shadow="mapgettile"
    
    export function setLocationProperty(obj: BlockObject, property: number, value: tiles.Location): void {
        (obj as any)["0loc" + property] = value;
    }
}   

namespace LocProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const loc = create();
}    
    
namespace blockObject {
    //% shim=KIND_GET kindMemberName=property block="$property"
    //% blockId=blockObject_locationArrayProp
    //% kindNamespace=LocArrayProp
    //% kindPromptHint="e.g. myLocationArray"
    export function _locArrayProperty(property: number): number {
        return property;
    }

    /**
     * Get a property of type tiles.Location [] from an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_get_locationArrayProp
    //% block="$obj get locationArray $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationArrayProp
    export function getLocationArrayProperty(obj: BlockObject, property: number): tiles.Location [] {
        return (obj as any)["0locArray" + property] as tiles.Location [];
    }
    
    /**
     * See if an object has a property of type tiles.Location []
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     */
    //% blockId=blockObject_has_locationArrayProp
    //% block="$obj has locationArray property $property"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationArrayProp
    export function hasLocationArrayProperty(obj: BlockObject, property: number): boolean {
        return (obj as any)["0locArray" + property] !== undefined;
    }

    /**
     * Set a property of type tiles.Location [] on an object
     * 
     * @param obj       The BlockObject to check
     * @param property  The property to check
     * @param value     The value to set
     */
    //% blockId=blockObject_set_locationArrayProp
    //% block="$obj set locationArray $property to $value"
    //% obj.shadow="variables_get" obj.defl="myObject"
    //% property.shadow=blockObject_locationArrayProp
    //% value.shadow="lists_create_with"
    //% value.defl="mapgettile"
    export function setLocationArrayProperty(obj: BlockObject, property: number, value: tiles.Location []): void {
        (obj as any)["0locArray" + property] = value;
    }
}   

namespace LocArrayProp {
    let nextKind: number;

    export function create() {
        if (nextKind === undefined) nextKind = 1000;
        return nextKind++;
    }

    //% isKind
    export const locArray = create();
}    
    
