# The Approach

## Step-1 creating the required components.

The folder structure:-

--Head

--Body
--Sidebar
--MenuItems

    --MainConatiner
        --Buttons List
        --Videpo Container
            --VideoCard

# Redux && Redux-Toolkit

Implementing redux so, on the click of hamburger icon, sidebar should pop or close accordingly.
As we want this functionality in every part of the app so we need to use redux.

-- Installed react-redux and react-redux@toolkit in our app.

-- Created a store in src/utils/app

-- Created slice in src/utils/features/appSlice. and then imported it into the store.

-- Provided our store to our app.
