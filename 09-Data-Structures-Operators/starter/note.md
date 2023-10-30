
# ///////////////////////////////////////
## OPTIONAL CHAINING NOTES
1. If a certain property does not exist, then undefined is returned immediately.

1. How it works:
    - Only if the property that is before the question mark exist, then the next property would be read from there, but if not, immediately undefined is returned.
        - Note: A property exist if its 'not null' and 'not undefined'. So If its 'zero' or the 'empty string' then is still exist. (The nullish concept).

```javascript
    { restaurant.openingHours.mon?.open }
```
- Note: In order to read .open, all the properties leading up to the property with the question should not be  undefined or null, but if it's undefined or null, then then result would be undefined immediately


- There can be multiple Optional Chaining
    
- Example: console.log(restaurant.openingHours?.mon?.open);
    - If 'openingHours' doesn't exist, then the 'mon' property will not even be read.

- Optional Chaining and nullish coalescing operator are designed to work well with each other. They both rely on the nullish concept
    - They are almost always used together, in case we don't get a result from the object or array


- Note: Optional chaning can also be used to check if a method exist, or if an array is empty

- Note: Optional chaining test if the value on the left does exist.



Reminder Note: If you want to use a variable name as a property name, you have to to use the brackets notation eg: [day]   (see fundametal section)




# ///////////////////////////////////////







# ///////////////////////////////////////
## ENCHANCED OBJECT LITERALS NOTE
1. Object literal (Internet note): an object literal is a comma-separated list of name-value pairs inside of curly braces

1. ES6 introduce 3 ways to make it easier to write object literal.

    ## Object literal first enhancement
    - if 'OBJECT-A' is outside of 'OBJECT-B', but you would like to be able to access object A inside of 'OBJECT-B', with enchanced object literal this is possible by simple referrening 'OBJECT-A' variable name inside 'OBJECT-B' as a property (OBJECT-A,). 
        - What this does is take 'OBJECT-A' and put it into 'OBJECT-B' and create a property name with exactly that variable name (in 'OBJECT-B'). Also if you change the variable name of 'OBJECT-A', then it should also be changed in 'OBJECT-B'

    ```javascript
    { name: "example" }
    ```
    ## Object literal second enhancement
    - This is about writing methods. In ES6, we no longer have to create a property and then set it to a function expression. Before we would have to create a property and then set it to a function expression. However, with ES6 we no longer have to do that, has if can be written in an easier way, which is to get rid of the 'function' and 'semicolon'. From 'example: function(argument/s){}' to 'example(argument/s){}'.

    ## Object literal third enhancement
    - We can now compute(calculate) property names instead of having to write them out manually and literally.
    - You can square bracket syntax to take property names out of an array instead of writing them manually.
        - you can put any expression in the square bracket syntax
    - Before we could only compute the values but we could not compute property names, but now we can do that as well.
# ///////////////////////////////////////



# ///////////////////////////////////////
## FOR OF LOOP NOTES
1. The FOR OF LOOP make it a lot easier to loop over arrays
1. With a FOR OF LOOP, you don't need to a 'counter' or 'condition', or to updating the counter, like you would with a regular FOR LOOP.
1. The For Of Loop is really just meant to give you the current element. So aquiring the current index is more difficult. However you can get both ( using entries()).
    - The entries() method returns an iterator object that contains the index-value pairs of each item.
    - It is basically an array which in each position contains a new array which contains the element, and the index number of the element in the original array.
1. We can use the 'continue' and 'break' keywords in the For of loop.
# ///////////////////////////////////////




# ///////////////////////////////////////
## LOGICAL ASSIGNMENT OPERATORS NOTES

1. OR assignment operator (||=): This operator assign a value to a variable if that variable is currently falsey. 
    However, it doesn't work if the variable default is 0 because zero is a falsey value. This can be resolved by using the logical nullish assignment operator

1. The logical nullish assignment operator (??=): Will assign value to a variable if that exact variable is currently nullish (null or undefined)

1. The logical AND assignment operator (&&=): 

    - This short-circuit when the first value is falsey, then immediately return that falsey value.

    - It assign a value to a variable if it is currently truety

    - If the variable is falsey, then nothing happen
    
    # RECAP: -
     If you ever need to assign value to a variable that is already defined (Tha has a value that is currently truety), then you can you this AND Assignment operator.
# ///////////////////////////////////////




# ///////////////////////////////////////
## THE NULLISH COALESCING OPERATOR

1. The Nullish Coalescing operator works with the idea or with the concept of knowledge values instead of falsey.

1. Nullish are null and undefined, it does not include 0 or the empty string. So eith the nullish operator, it's as if empty strings ('') or 0 are truety values.

1. Only Nullish values willshort-circuit the evaluation. So only if the first operant is null or undefined will the second operant be executed and returned
# ///////////////////////////////////////






# ///////////////////////////////////////
## LOGICAL OPERATOR NOTES

# Note:
    can use any data type.
    Return any data type.
    They do short-circuiting/short-circuit-evaluation.
    
    Note: Short-circuiting means that if the first value is a truety value, it would immediately return that first value. In other words, if the first operant is true, the second operant won't even be evaluated.

1. In the || operation the result is true if at least one operant is true. So if the first operant is alrady true, then JavaScript doesn't have to to look at the other values, because the result of the expression would already be true anyways, so it will short-circuit and return that first result.

1. If the value of a variable is 0, then the || operator won't work, as 0 is a false value.

1. When it comes to short-circuit evaluation, the && operator works in the exact opsite way of the || operator.

1. The && operator short-circuit when the first value is falsey, then immediately return that falsey value without even evaluating the second operanct. This is the oposite of what happens with the || operator which short-circuit when the first operator is true.

1. When the && operator is truety the evaluation continues, and the last value is return.

1. The && operator is only true if all the operant are true. So if the first operant is false, then then entire result of the && operation will already be false anyway, so there is no need to even look at any of the other operants. ~ As a result it will return the false value, and it short-circuit the rest of the evaluation ~

1. The && operator can be used to avoid (making) an IF STATEMENT is all you want to do is to check if a certain property or value actually exist

# RECAP: -
    The || opertor will return the first truety value of all operants or simply the last value if all of them or falsey. On the other hand, the && operator will resturn the first falsey value, or the last value if all of them or truety

    For Practical applications: We can use the || operator to set default values, and we can use the && operator to execute code in the second operant if the first one is true.
# ///////////////////////////////////////




# ///////////////////////////////////////
## SPREA OPERATION, AND REST PATTERN AND PARAMETERS NOTES
1. We can only use The spread operator (...) when bulding an array, or when we pass values into a function

1. Multiple values separated by commas are usually only expected when we pass arguments into functions are when we build a new array

1. Since 6S 2018 the spread operator (...) can also work on object, even though objects are not iterable

1. The spread operator (...) can do shallow copies of arrays. It can also be used to make shallow copies objects instead of using the 'object.assign'

1. The Rest Pattern (...) has the same syntax as the spread operator (...), but does the oposite.

1. We use the spread operator to expand an arrray into individual elements. The Rest Patter uses the same syntax, however its use to collect multiple elements and condense them into an array. (spread operator (...) is to unpact an array, while the rest pattern is to pack elements into an arry).

1. spread operator (...) syntax is used on the right hand side of the assignment operator (The equal sign). However, it can also be used on the left hand side together with desructoring (REST Pattern).

1. The rest pattern (...) is used on the left hand side of the assignment operator (The equal sign).

1. It is called REST (Rest pattern) because it takes the rest/remaining elements of an array, and put them in a new array.

1. The Rest pattern basically collects the elements that are un-used in the desructoring assignment.

1. The rest pattern (...) syntax collects all the array elements after the last variable, it doesn't include any skipped elements. So it's really just the rest of the elements, and for that reason the rest pattern (...) should be the last in the desructuring assignment. Therefore, there can only be one rest pattern in a desructuring assignment.

1. The rest pattern (...) can also be used with objects, the difference is that the remaining elements would be collected in a new object, and not in a new array.

## Internet Note: Rest parameters are used to create functions that accept any number of arguments

# Question: Rest Aruguments?

# RECAP: -
 The SPREAD and the REST syntax both look exactly the same, but the work in opsite ways depending on where they are used. The SPREAD operator is used where we would write values separated by a comma. On the other hand, the REST pattern is basically used where we would otherwise write variable names separated by commas. (The Rest pattern can be used where we would write variable names separated by commas).
# ///////////////////////////////////////
















