import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { CadastroEnderecoComponent } from './pages/cadastro-endereco/cadastro-endereco.component';
import { ConsultaEnderecoComponent } from './pages/consulta-endereco/consulta-endereco.component';
import { ConsultaTelefoneComponent } from './pages/consulta-telefone/consulta-telefone.component';
import { CadastroTelefoneComponent } from './pages/cadastro-telefone/cadastro-telefone.component';

export const routes: Routes = [
    {path: '', component: HomeComponent },
    {path: 'sobre', component: SobreComponent },
    {path: 'cadastro', component: CadastroComponent },
    {path: 'cadastroEndereco', component: CadastroEnderecoComponent },
    {path:'cadastroTelefone', component: CadastroTelefoneComponent },
    {path: 'consulta', component: ConsultaComponent },
    {path: 'consultaEndereco', component: ConsultaEnderecoComponent },
    {path: 'consultaTelefone', component: ConsultaTelefoneComponent }
];
