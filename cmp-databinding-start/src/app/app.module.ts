import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { Cockpit } from "./cockpit/cockpit.component";

@NgModule({
  declarations: [AppComponent, Cockpit],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  serverElements = [];
  onAddServerAdd({
    serverName,
    serverData,
  }: {
    serverName: string;
    serverData: string;
  }) {
    this.serverElements.push({
      type: "server",
      name: serverName,
      content: serverData,
    });
  }

  onAddBlueprintAdd({
    serverName,
    serverContent,
  }: {
    serverName: string;
    serverContent: string;
  }) {
    this.serverElements.push({
      type: "blueprint",
      name: serverName,
      content: serverContent,
    });
  }
}
