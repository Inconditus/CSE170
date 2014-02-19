#API for GroupBuy
##Sign Up
- Sends POST request to /end/signup
- Request body parameters
	- username=value
	- password=value

##Login
- Sends POST request to /end/login
- Request body parameters
	- username=value
	- password=value

##Listings
- Sends GET request to /end/listings
- No parameters

##View Profile
- Sends get request to /end/profile
- No request parameters

##Edit Profile
- Sends POST request to /end/profile/edit
- Request body parameters

##Add Item
- Sends POST request to /end/item/add
- Request body parameters
	- name=value
	- price=value
	- desc=value
	- image=value

