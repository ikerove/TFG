<template>
  <body class = "panel">
    <h3> Mis Paneles</h3>
    <div class = "boards-collection">
      <input
        type = "text"
        placeholder = "Añde un nuevo panel"
        v-model = "boardName"
        @keyup.enter = "add()"
        />
      <board-card
        v-for="(board, index) in boards"
        :key = "index"
        :name = "board.name"
        :id = "board.id">
      </board-card>
    </div>
  </body>
</template>

<script>
import BoardCard from '@/components/BoardCard'
export default {
  name: 'home-view',
  components: {BoardCard},
  data: function () {
    return {
      boardName: '',
      boards: [
        { id: 1, name: 'Componente 1'}, 
        { id: 2, name: 'Componente 2'}
        
      ]
    }
  },
  methods: {
    add: function (){
      this.boards.push({name: this.boardName})
    }
  }

}
</script>

<style lang="scss" scoped>
 h3 {
    text-align: left;
    margin: 1.5rem;
 }

  .boards-collection {
    position: fixed;
    display: flex;
    flex-direction: row;
    flex-wrap: Wrap;
    justify-content: center;
    padding-top: 1rem;
  }

  input {
    box-sizing: border-box;
    background-color: #546E7A;
    border: 2px solid D#546E7A;
    border-radius: 3px;
    font-size: 1.1rem;
    outline: e;
    padding: 0.5rem;
    transition: all 600ms ease;

    &:focus,
    &:active {
      background-color: white;
      color: #546E7A;
    }
    &::placeholder {
      color: white;
    }
  }

    
</style>