![Arcadier](https://theme.zdassets.com/theme_assets/2008942/9566e69f67b1ee67fdfbcd79b1e580bdbbc98874.svg "Arcadier")

# Marketplace Populator Plug-In

This article will contain all the necessary info on the functionality, flexibility, and possibilities of the Marketplace Populator Plug-In and will mostly be in regards to Developers. To actually use the Plug-In in fairly simple, however, this article will go more in depth on how possible alteration the given code can be explored.

-----------------------------------------------------------------------------------------------------------------------------

## Generating Users

To use the User Generator, click on the Users tab at the top of the page.

<img width="1438" alt="1" src="https://user-images.githubusercontent.com/6611854/61353630-dd270100-a8a2-11e9-90c1-985d2241a3f6.png">

Enter the number of Merchants and Buyers you would like to generate for your marketplace. Click the blue "Generate Users" button. Once you receive the Success message, the numbers within the \[\] brackets indicate the User number. For example, if you take a look at the screenshot below, the 5 Merchants that were created would have the following 
s:
Merchant1773, Merchant1774, Merchant1775, Merchant1776, Merchant1777 (Basically 1773-1777).

<img width="1434" alt="2" src="https://user-images.githubusercontent.com/6611854/61354421-b8338d80-a8a4-11e9-8b9a-aa7e7a344741.png">

The same applies to the usernames of Buyers. If you would like to see the complete list of your generated Users, go to your marketplace's User Management page.

<img width="1419" alt="3" src="https://user-images.githubusercontent.com/6611854/61354472-d13c3e80-a8a4-11e9-9484-411bbad6c771.png">

-----------------------------------------------------------------------------------------------------------------------------

## Generating Categories

To use the Category Generator, click on the Categories tab at the top of the page. 

<img width="1433" alt="1" src="https://user-images.githubusercontent.com/6611854/61353637-e021f180-a8a2-11e9-9ba7-5da064c7ce0e.png">

Enter the number of Categories and SubCategories you would like to generate for your marketplace. Click the blue "Generate Categories" button. Once you receive the Success message, the numbers within the \[\] brackets indicate the Category number. For example, if you take a look at the screenshot below, the 2 Categories that were created would have the following names: Category194 and Category195.

<img width="1429" alt="2" src="https://user-images.githubusercontent.com/6611854/61352173-4efd4b80-a89f-11e9-92ed-ecbc5e71f753.png">

As for the SubCategories, they would contain the parent Category's number as well as an alphabetical letter indicating which SubCategory: SubCategory194A and SubCategory194B, SubCategory195A and SubCategory195B (total 4 SubCategories).

<img width="1427" alt="3" src="https://user-images.githubusercontent.com/6611854/61355328-b5399c80-a8a6-11e9-8815-f540648805f7.png">

-----------------------------------------------------------------------------------------------------------------------------

## Generating Items

To use the Item Generator, click on the Items tab at the top of the page. 

<img width="1435" alt="1" src="https://user-images.githubusercontent.com/6611854/61353633-de582e00-a8a2-11e9-8d63-a165e2b6c390.png">

Enter the number of Items, and under which Merchant (by username), you would like to generate for your marketplace. Click the blue "Generate Items" button. Once you receive the Success message, the numbers within the \[\] brackets indicate the Item number. If you take a look at the screenshot below, the 4 Items that were created would have the following names: Item547, Item548, Item549, Item550 (Basically 547-550).

<img width="1434" alt="2" src="https://user-images.githubusercontent.com/6611854/61352745-b36cda80-a8a0-11e9-949d-f2f9ee193217.png">

If an invalid username or email is entered, an error message will appear indicating a failure to generate the items for that specific Merchant.

<img width="1432" alt="3" src="https://user-images.githubusercontent.com/6611854/61353068-71906400-a8a1-11e9-9d3f-2cc2f2115526.png">

If you would like to see the results of your Item Generator, go to the User page of your marketplace where you will be able to see the various listings created.

<img width="1433" alt="4" src="https://user-images.githubusercontent.com/6611854/61355167-5aa04080-a8a6-11e9-93b9-b101ddd9c235.png">

-----------------------------------------------------------------------------------------------------------------------------

## Generating Transactions

To use the Transaction Generator, click on the Transactions tab at the top of the page. 

<img width="1435" alt="1" src="https://user-images.githubusercontent.com/6611854/61353715-0e9fcc80-a8a3-11e9-86e6-e16fb47261ec.png">

To generate fake Transactions for your marketplace, no specific inputs are required. Simply click the blue "Generate Categories" button and the Transactions will be made. You do not need to initialize anything before generating fake Transactions as all of the information is hard coded. In other words, your marketplace can be completely empty to generate Transactions. Please note that in order to generate fake Transactions, some variables are automatically generated which are indicated in the screenshot below. Once you receive the Success message, you will be given the username of the generated Buyer which is involved in all 10 transactions created.

<img width="1434" alt="2" src="https://user-images.githubusercontent.com/6611854/61355553-46107800-a8a7-11e9-8307-9b6fc1a429e6.png">

In order to view your generated Transactions, go to your marketplace's Payments & Transactions page.

<img width="1419" alt="3" src="https://user-images.githubusercontent.com/6611854/61355089-2dec2900-a8a6-11e9-9861-d6324696feb9.png">

-----------------------------------------------------------------------------------------------------------------------------

## Uploading Users

To upload defined Users onto your marketplace, click on the Upload Users tab at the top of the page.

[1]

This section of the Plug-In makes use of csv files in order to incorporate established data from the marketplace Administrator. Download the User Template csv file and follow the instructions and parameters carefully. Take note of the following rules/warnings to prevent errors of any sort:
 * (R) indicates that the input for that section is Required
 * (M) indicates that the input for that section is only for Merchants
 * If any part of your input contains commas(","), put quotation marks around the entire input
   * Example: "This is my description, that contains, a lot, of commas,,,"
 * Users created will have initializing passwords identical to their respective Username/Email
 
 [2 - input]
 
 After uploading the file, click on Upload Users to complete the generation. Please take note of the following errors that may result in a miscreation or an incorrect update:
  * The Username/Email already exists
  * Invalid Phone Number
      * Will **NOT** create User
  * Invalid Postal Code
      * Will **NOT** create User
  * Invalid Country Code
      * Will **NOT** create User
  * Invalid Delivery Method
    * Will create User but not Shipping Method
  * Invalid Currency Code
    * Will create User but not Shipping Method
  * Invalid Price
    * Will create User but not Shipping Method
  * Invalid Combined Price
    * Will create User but not Shipping Method
All errors will indicate which User has encountered which issue.

-----------------------------------------------------------------------------------------------------------------------------

## Uploading Items

To upload defined Items onto your marketplace, click on the Upload Items tab at the top of the page.

[1]

This section of the Plug-In makes use of csv files in order to incorporate established data from the marketplace Administrator. Download the Item Template csv file and follow the instructions and parameters carefully. Take note of the following rules/warnings to prevent errors of any sort:
 * (R) indicates that the input for that section is Required
 * If any part of your input contains commas(","), put quotation marks around the entire input
   * Example: "This is my description, that contains, a lot, of commas,,,"
   * Please do this for multiple Categories and/or multiple Tags
 
  [2 - input]
 
 After uploading the file, click on Upload Users to complete the generation. Please take note of the following errors that will result in an error, causing that specific item to not be created:
  * The User does not exist on your marketplace
  * The User is not a Merchant
  * Invalid Price
  * Stock Quantity not specified for Limited Stock
  * Invalid Stock Quantity
  * Invalid Currency Code
  * Invalid Categories
    * Item will still be created as long as there is **ONE** valid Category
All errors will indicate which Item has encountered which issue.
