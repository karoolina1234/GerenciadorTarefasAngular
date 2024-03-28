import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { TarefaConcluidaDirective, TarefaService } from "./shared";
import { ListarTarefaComponent } from "./listar-tarefa/listar-tarefa.component";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CadastrarTarefaComponent } from "./cadastrar-tarefa";
import { EditarTarefaComponent } from "./editar-tarefa";

@NgModule({
  declarations: [
    ListarTarefaComponent,
    CadastrarTarefaComponent,
    EditarTarefaComponent,
    TarefaConcluidaDirective,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  providers: [TarefaService],
})
export class TarefasModule {}
