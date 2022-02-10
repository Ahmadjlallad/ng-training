# Modules

## making a multiple modules will improve app performance

1. we have to make a new module than convener the roots or router by adding a new

```ts
router.forChild(/*we add the roots that is specific to the module*/);
```

than for every pipe component and directive we have to import it in the module
for ngIf or ngFor we need to import the CommonModule from angular

## you can declare component pip or directives once in the module

- if we create a sheared module we cant also declare the same component or pipes or directives in the module that import this sheared module

## lazy loading

- prerequisite

1. we have to spilt the features into deferent modules and every module must have there own router and forChild Route
2. we have to make the routing in the route and we must not import the module in any module or main one

```ts
const appRoutes: Routes = [
  { path: "", redirectTo: "/recipes", pathMatch: "full" },
  {
    path: "recipes",
    loadChildren: () =>
      import("./recipes/recipes.module").then((m) => m.RecipesModule),
  },
  {
    path: "shopping-list",
    loadChildren: () =>
      import("./shopping-list/shopping-list.module").then(
        (m) => m.ShoppingListModule
      ),
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then((m) => m.AuthModule),
  },
];
```

3. load the component when we need to load it we can set pre loading strategy
   `RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})`

- NoPreloading
- PreloadAllModulesS
-
