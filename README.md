# AngularXStarter
Angular + NGRX + Ionic Starter Kit with reusable business logic. Sample TODO app built in.

# What is this Repository?
1. **Demo of how the code can be reused between Angular and Ionic Application**
2. Based on a Nx Workspace mono-repo project structure (from Nrwl.io Nx Extensions, an open source toolkit for enterprise Angular applications).
3. **Uses NGRX to write application business logic**:


# Sample Screenshots
**Mobile Ionic**
![](/media/Mobile.gif)

**Web Angular**
![](/media/Web.gif)


# Code Structure
1. **apps/web**: A web application created using Angular
2. **apps/mobile**: Mobile app created using Ionic
3. **libs/core**: The shared folder which contains extracted business logic(Actions, Reducers, Pipe etc). This is reused in both web and mobile

# To Run Locally
**For Web app**
1. npm install
2. npm start

**For mobile app**
1. cd to app/mobile and npm install
2. from root ionic serve
