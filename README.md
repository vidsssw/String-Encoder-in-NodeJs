# a1
Encoding a longer string to a shorter one and decoding it back

Algorithm:
1) Converts a string to a long integer. Basic function is used for the same. C is a string that contains all small letters. a simple mathematical function, generates a long number
r is the number we want to generate
c is the character set
i is all the characters of the string traversed one by one.

r=r*c.length+c.indexOf(i). 

2) For this generated integer, took all the digits as a group of 2 and converted them to a character according to the  ascii value that the digit represents.
3) For this case, for all numbers that were less than or equal to 32 would represent ascii values for special characters like escape or space. Thus  added +32 to such values, and got a corresponding character. Stored indexes of such number in an array, so that while decoding 32 can be subtracted.
4) Now a alphanumeric string is generated.
5) Now to decode, we can convert this string back to the number that was generated because of the actual string
6) Using the index array, we subtract  32 from where 32 extra was added initially.
7) Once this number is generated we generate the original string using another simple while loop that will run till number is 0
r is the string that is generate
c is the character set
no is the number we have  
r=r+c.charAt(no%c.length)
divide the number by c.length again
8) However, I noticed that the string was generated in reverse. So, sent the ans back by reversing the string.



index.html file -> the structure of the html page was defined here
funct.js -> consisted of my functions for encoding and decoding
index.js -> entry point of this code. 
Used express to  manage servers, response, requests.
Used body-parser to tap into the data that was typed in the input part of the html form that was sent as a request to the browser
Used funct.js  as an external module. exported encode function. The output was sent as a response to post request generated when button was clicked.


Test Screenshots:

(For a single length string, cannot shorten further thus decided to return same length encoded string)
![4](https://user-images.githubusercontent.com/51160533/68610605-23e9d800-04de-11ea-95f8-6595fec834b4.png)
![3](https://user-images.githubusercontent.com/51160533/68610604-23e9d800-04de-11ea-9165-73b8035ea005.png)

(For input vidisha we get an encoded string and original string back)
![5](https://user-images.githubusercontent.com/51160533/68610606-23e9d800-04de-11ea-878c-ab92f7d5edd9.png)
![6](https://user-images.githubusercontent.com/51160533/68610601-23514180-04de-11ea-9956-5b7876b21299.png)

(For input helloworld we get an encoded string and then original strig back)
![1](https://user-images.githubusercontent.com/51160533/68610602-23514180-04de-11ea-9611-da642af3e6fe.png)
![2](https://user-images.githubusercontent.com/51160533/68610603-23514180-04de-11ea-9dab-e7c514edbd9a.png)



