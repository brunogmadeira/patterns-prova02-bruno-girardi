// Composite

class Component {
    constructor(name) {
      this.name = name;
    }
    add(_) {
      throw new Error("Operação não suportada.");
    }
    remove(_) {
      throw new Error("Operação não suportada.");
    }
    showDetails(_) {
      throw new Error("Operação não suportada.");
    }
  }
  
  class Task extends Component {
    constructor(name) {
      super(name);
    }
  
    // Folha não suporta add/remove
    add(_) {
      throw new Error("Task não pode agregar itens.");
    }
  
    remove(_) {
      throw new Error("Task não pode remover itens.");
    }
  
    showDetails(indent = 0) {
      const pad = " ".repeat(indent);
      console.log(`${pad}- Tarefa: ${this.name}`);
    }
  }
  
  class Project extends Component {
    constructor(name) {
      super(name);
      this.children = [];
    }
  
    add(component) {
      this.children.push(component);
    }
  
    remove(component) {
      this.children = this.children.filter((c) => c !== component);
    }
  
    showDetails(indent = 0) {
      const pad = " ".repeat(indent);
      console.log(`${pad}+ Projeto: ${this.name}`);
      this.children.forEach((child) => child.showDetails(indent + 2));
    }
  }
  
  // Cliente (exemplo de uso)
  const t1 = new Task("Escrever documentação");
  const t2 = new Task("Fazer testes");
  const t3 = new Task("Criar UI");
  
  const subProject = new Project("Módulo A");
  subProject.add(t3);
  
  const p = new Project("Lançamento v1.0");
  p.add(t1);
  p.add(t2);
  p.add(subProject);
  
  p.showDetails();