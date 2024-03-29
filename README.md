![Arcadier](https://theme.zdassets.com/theme_assets/2008942/9566e69f67b1ee67fdfbcd79b1e580bdbbc98874.svg "Arcadier")

# Marketplace Populator Plug-In

This article will contain all the necessary info on the functionality, flexibility, and possibilities of the Marketplace Populator Plug-In and will mostly be in regards to Developers. To actually use the Plug-In in fairly simple, however, this article will go more in depth on how possible alteration the given code can be explored.

-----------------------------------------------------------------------------------------------------------------------------

## Generating Users

To use the User Generator, click on the Users tab at the top of the page.

<img width="1428" alt="1" src="https://user-images.githubusercontent.com/6611854/62359667-dd352b00-b549-11e9-8e9b-2d0278f8b982.png">

Enter the number of Merchants and Buyers you would like to generate for your marketplace. Click the blue "Generate Users" button. Once you receive the Success message, the numbers within the \[\] brackets indicate the User number. For example, if you take a look at the screenshot below, the 5 Merchants that were created would have the following 
s:
Merchant1920, Merchant1921, Merchant1922, Merchant1923, Merchant1924 (Basically 1920-1924).

<img width="1439" alt="2" src="https://user-images.githubusercontent.com/6611854/62359670-dd352b00-b549-11e9-9f69-e8781dd39bfb.png">

The same applies to the usernames of Buyers. If you would like to see the complete list of your generated Users, go to your marketplace's User Management page.

<img width="1412" alt="3" src="https://user-images.githubusercontent.com/6611854/62359671-ddcdc180-b549-11e9-8926-1f56193c2a59.png">

-----------------------------------------------------------------------------------------------------------------------------

## Generating Categories

To use the Category Generator, click on the Categories tab at the top of the page. 

<img width="1435" alt="1" src="https://user-images.githubusercontent.com/6611854/62360141-c8a56280-b54a-11e9-8a27-eca6335b3427.png">

Enter the number of Categories and SubCategories you would like to generate for your marketplace. Click the blue "Generate Categories" button. Once you receive the Success message, the numbers within the \[\] brackets indicate the Category number. For example, if you take a look at the screenshot below, the 2 Categories that were created would have the following names: Category234 and Category235.

<img width="1432" alt="2" src="https://user-images.githubusercontent.com/6611854/62361333-6568ff80-b54d-11e9-95b9-d52c09664bb6.png">

As for the SubCategories, they would contain the parent Category's number as well as an alphabetical letter indicating which SubCategory: SubCategory234A and SubCategory234B, SubCategory235A and SubCategory235B (total 4 SubCategories).

<img width="1437" alt="3" src="https://user-images.githubusercontent.com/6611854/62360144-c8a56280-b54a-11e9-9705-1fb005e6b742.png">

-----------------------------------------------------------------------------------------------------------------------------

## Generating Items

To use the Item Generator, click on the Items tab at the top of the page. 

<img width="1433" alt="1" src="https://user-images.githubusercontent.com/6611854/62361325-6437d280-b54d-11e9-92c6-a585db454442.png">

Enter the number of Items, and under which Merchant (by username), you would like to generate for your marketplace. Click the blue "Generate Items" button. Once you receive the Success message, the numbers within the \[\] brackets indicate the Item number. If you take a look at the screenshot below, the 4 Items that were created would have the following names: Item689, Item690, Item691, Item692 (Basically 689-692).

<img width="1435" alt="2" src="https://user-images.githubusercontent.com/6611854/62361326-6437d280-b54d-11e9-9017-320133e3e49d.png">

If an invalid username or email is entered, an error message will appear indicating a failure to generate the items for that specific Merchant.

<img width="1434" alt="3" src="https://user-images.githubusercontent.com/6611854/62361327-6437d280-b54d-11e9-947f-15ceb4caf9ef.png">

If you would like to see the results of your Item Generator, go to the User page of your marketplace where you will be able to see the various listings created.

<img width="1436" alt="4" src="https://user-images.githubusercontent.com/6611854/62361329-64d06900-b54d-11e9-9d05-1bbdbb64761d.png">

-----------------------------------------------------------------------------------------------------------------------------

## Generating Transactions

To use the Transaction Generator, click on the Transactions tab at the top of the page. 

<img width="1438" alt="1" src="https://user-images.githubusercontent.com/6611854/62446019-4a3c0100-b794-11e9-960a-247e813f54ea.png">

To generate fake Transactions for your marketplace, no specific inputs are required. Simply click the blue "Generate Categories" button and the Transactions will be made. You do not need to initialize anything before generating fake Transactions as all of the information is hard coded. In other words, your marketplace can be completely empty to generate Transactions. Please note that in order to generate fake Transactions, some variables are automatically generated which are indicated in the screenshot below. Once you receive the Success message, you will be given the username of the generated Buyer which is involved in all 10 transactions created.

<img width="1436" alt="2" src="https://user-images.githubusercontent.com/6611854/62446022-4ad49780-b794-11e9-9545-a8d7cf47fce0.png">

In order to view your generated Transactions, go to your marketplace's Payments & Transactions page.

<img width="1426" alt="3" src="https://user-images.githubusercontent.com/6611854/62362467-93e7da00-b54f-11e9-8e77-af3cd71f076f.png">

-----------------------------------------------------------------------------------------------------------------------------

## Uploading Users

To upload defined Users onto your marketplace, click on the Upload Users tab at the top of the page.

<img width="1436" alt="1" src="https://user-images.githubusercontent.com/6611854/64399064-b4004100-d099-11e9-87ff-5d834559fc40.png">

This section of the Plug-In makes use of csv files in order to incorporate established data from the marketplace Administrator. Download the User Template csv file and follow the instructions and parameters carefully. Take note of the following rules/warnings to prevent errors of any sort:
 * (R) indicates that the input for that section is Required
 * (M) indicates that the input for that section is only for Merchants
 * If any part of your input contains commas(","), put quotation marks around the entire input
   * Example: "This is my description, that contains, a lot, of commas,,,"
 * Users created will have initializing passwords identical to their respective Username/Email
 
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

<img width="1436" alt="2" src="https://user-images.githubusercontent.com/6611854/64399065-b4004100-d099-11e9-9ac4-73f6d167dc88.png">

-----------------------------------------------------------------------------------------------------------------------------

## Uploading Items

To upload defined Items onto your marketplace, click on the Upload Items tab at the top of the page.

<img width="1434" alt="1" src="https://user-images.githubusercontent.com/6611854/64399056-b1055080-d099-11e9-91e1-bdad25dd621b.png">

This section of the Plug-In makes use of csv files in order to incorporate established data from the marketplace Administrator. Download the Item Template csv file and follow the instructions and parameters carefully. Take note of the following rules/warnings to prevent errors of any sort:
 * (R) indicates that the input for that section is Required
 * If any part of your input contains commas(","), put quotation marks around the entire input
   * Example: "This is my description, that contains, a lot, of commas,,,"
   * Please do this for multiple Categories and/or multiple Tags
 * This Plug-In does not support items with variance
 
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

<img width="1437" alt="2" src="https://user-images.githubusercontent.com/6611854/64399059-b1055080-d099-11e9-9af8-ef5aa98565c9.png">
