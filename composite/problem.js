// Componente base (interface)
class Component {
  draw() {
    throw new Error('Método draw() deve ser implementado');
  }
}

// Componentes folha (Leaf)
class Button extends Component {
  constructor(label) {
    super();
    this.label = label;
  }

  draw() {
    console.log(`Botão: [${this.label}]`);
  }
}

class Text extends Component {
  constructor(content) {
    super();
    this.content = content;
  }

  draw() {
    console.log(`Texto: "${this.content}"`);
  }
}

// Componente composto (Composite)
class Panel extends Component {
  constructor(name) {
    super();
    this.name = name;
    this.children = [];
  }

  add(component) {
    this.children.push(component);
    return this;
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
    return this;
  }

  draw() {
    console.log(`\n=== Painel: ${this.name} ===`);
    this.children.forEach(child => child.draw());
    console.log(`=== Fim do Painel: ${this.name} ===\n`);
  }
}

// Exemplo de uso
const mainPanel = new Panel('Principal');
mainPanel
  .add(new Text('Bem-vindo!'))
  .add(new Button('Confirmar'));

const subPanel = new Panel('Secundário');
subPanel
  .add(new Text('Configurações'))
  .add(new Button('Salvar'))
  .add(new Button('Cancelar'));

mainPanel.add(subPanel);

mainPanel.draw();
