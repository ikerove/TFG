<template>
    <div class="field">
        <label class="label">Categoria</label>
        <div class="control">
         <input class="input" type="text" placeholder="e.g Pantalones">
        </div>
    </div>

    <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
         <input class="input" type="text" placeholder="e.g Vintage">
        </div>
    </div>
    <div class="field">
        <label class="label">ID</label>
        <div class="control">
         <input class="input" type="text" placeholder="e.g 00001">
        </div>
    </div>
    <div class="control">
        <label class="label">Certificados</label>       
        <div class="select">
         <select>
             <option>Select dropdown</option>
             <option>With options</option>
         </select>
     </div>
    </div>
    <div class="field">
        <label class="label">Marca</label>
        <div class="control">
         <input class="input" type="text" placeholder="e.g Levis">
        </div>
    </div>
    <div class="field">
        <label class="label">Materiales</label>
        <div class="control">
         <input class="input" type="text" placeholder="e.g Alex Smith">
        </div>
    </div>

    <div class="field">
        <label class="label">Link de compra</label>
        <div class="control">
         <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
        </div>
    </div>

    <div class="field is-grouped is-grouped-right">
      <p class="control">
        <a class="button is-primary">
          Submit
        </a>
      </p>
      <p class="control">
        <a class="button is-light">
            Cancel
        </a>
      </p>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>