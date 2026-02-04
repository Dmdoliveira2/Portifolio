# 💼 Portfólio - Douglas Oliveira

Portfólio pessoal desenvolvido para apresentar minhas habilidades, projetos e experiência como Desenvolvedor Front-End.

## 🔗 [Ver Portfólio ao Vivo](https://dmdoliveira2.github.io/Portifolio/)

![Preview do Portfólio](./image/preview.png)

---

## 📋 Sobre o Projeto

Este portfólio foi desenvolvido do zero com o objetivo de demonstrar minhas competências técnicas em desenvolvimento web front-end, aplicando boas práticas de código, design responsivo e interatividade.

### ✨ Destaques

- 🎨 Design moderno e limpo
- 📱 Totalmente responsivo (Mobile-first)
- ⚡ Performance otimizada
- ♿ Acessível e semântico
- 🎯 Interface intuitiva e amigável

---

## 🚀 Tecnologias Utilizadas

### Core
- **HTML5** - Estrutura semântica
- **CSS3** - Estilização e layouts responsivos
- **JavaScript (ES6+)** - Interatividade e funcionalidades

### Metodologias e Práticas
- **BEM (Block Element Modifier)** - Organização de CSS
- **Mobile-first** - Abordagem responsiva
- **Git & GitHub** - Versionamento de código
- **Código limpo** - Seguindo padrões e boas práticas

---

## 🎯 Funcionalidades

### Navegação
- ✅ Menu de navegação fixo
- ✅ Smooth scroll entre seções
- ✅ Menu hamburguer responsivo para mobile
- ✅ Botão "Voltar ao Topo"

### Seções
- 🏠 **Home** - Apresentação pessoal com call-to-action
- 👤 **Sobre Mim** - Descrição profissional e competências
- 🛠️ **Habilidades** - Tecnologias dominadas
- 💻 **Projetos** - Portfólio de trabalhos realizados
- 📧 **Contato** - Links para redes sociais e e-mail

### Interatividade
- 🎭 Animações suaves ao rolar a página
- 🖱️ Hover effects nos elementos interativos
- 📥 Download de currículo em PDF
- 🔗 Links externos para projetos no GitHub

---

## 📁 Estrutura de Arquivos

```
Portifolio/
│
├── index.html                 # Página principal
├── README.md                  # Documentação do projeto
│
├── page/
│   └── index.css             # CSS principal (importa todos os módulos)
│
├── blocks/                   # Módulos CSS (BEM)
│   ├── header.css           # Estilos do cabeçalho
│   ├── home.css             # Seção home
│   ├── about.css            # Seção sobre mim
│   ├── skills.css           # Seção habilidades
│   ├── project.css          # Seção projetos
│   └── footer.css           # Rodapé e contato
│
├── vendor/                   # Arquivos de terceiros
│   ├── normalize.css        # Reset CSS
│   └── fonts.css            # Fontes customizadas
│
├── fonts/                    # Arquivos de fontes
│   └── inter.css            # Fonte Inter
│
├── image/                    # Imagens e ícones
│   ├── douglas.jpg          # Foto perfil
│   ├── Icon-HTML.svg        # Ícone HTML
│   ├── Icon-css.svg         # Ícone CSS
│   ├── Icon-js.svg          # Ícone JavaScript
│   ├── Icon-react.svg       # Ícone React
│   ├── Icon-git.svg         # Ícone Git
│   └── [projetos...]        # Imagens dos projetos
│
├── curriculo/               # Currículo para download
│   └── Currículo_Douglas.pdf
│
└── script.js                # JavaScript (funcionalidades interativas)
```

---

## 🛠️ Como Executar o Projeto

### Pré-requisitos
- Navegador web moderno (Chrome, Firefox, Edge, Safari)
- Editor de código (VS Code recomendado)

### Instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/portfolio.git
```

2. **Navegue até a pasta**
```bash
cd portfolio
```

3. **Abra o arquivo `index.html`**
   - Duplo clique no arquivo, ou
   - Use a extensão Live Server do VS Code para desenvolvimento

---

## 💡 Funcionalidades JavaScript Implementadas

### 1. Smooth Scroll
```javascript
// Rolagem suave ao clicar nos links de navegação
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});
```

### 2. Botão Voltar ao Topo
- Aparece após rolar 300px
- Retorna suavemente ao início da página

### 3. Menu Mobile Responsivo
- Menu hamburguer para dispositivos móveis
- Animação de abertura/fechamento
- Fecha automaticamente ao clicar em um link

---

## 📱 Responsividade

O site foi desenvolvido com abordagem **mobile-first** e é totalmente responsivo:

- 📱 **Mobile** - até 768px
- 💻 **Tablet** - 768px a 1024px  
- 🖥️ **Desktop** - acima de 1024px

---

## 🎨 Paleta de Cores

```css
/* Cores principais */
--primary-color: #007bff;
--secondary-color: #0056b3;
--background-dark: #1a1a1a;
--text-white: #ffffff;
--text-gray: #cccccc;
```

---

## 📈 Melhorias Futuras

- [ ] Adicionar modo escuro (dark mode)
- [ ] Implementar animações mais elaboradas
- [ ] Adicionar formulário de contato funcional
- [ ] Criar versão em inglês
- [ ] Integrar blog pessoal
- [ ] Adicionar seção de depoimentos
- [ ] Implementar analytics

---

## 🤝 Contribuições

Sugestões e feedbacks são sempre bem-vindos! Sinta-se à vontade para:

1. Fazer um fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adicionando nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abrir um Pull Request

---

## 📞 Contato

- **LinkedIn:** [Douglas Oliveira](https://www.linkedin.com/in/douglas-oliveira-14bab9326/)
- **GitHub:** [@Dmdoliveira2](https://github.com/Dmdoliveira2)
- **Email:** dmdoliveira2@outlook.com

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 🙏 Agradecimentos

Agradeço a todos que contribuíram direta ou indiretamente para meu aprendizado e desenvolvimento como programador.

---

<div align="center">

**Desenvolvido com 💙 por Douglas Oliveira**

⭐ Se você gostou deste projeto, considere dar uma estrela!

</div>
