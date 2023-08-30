export function createId() {
  return `id_${Math.floor(Math.random() * 1000)}`;
}
/**
 * 
 * @param {HTMLElement} node 
 * @param {string} data 
 */
export function draggable(node, data) {
  let state = data
  node.draggable = true;

  function handle_dragstart(e) {
    e.dataTransfer.setData('text/plain', state);
  }

  node.addEventListener('dragstart', handle_dragstart);

  return {
    update() {
      state = state;
    },
    destroy() {
      node.removeEventListener('dragstart', handle_dragstart);
    }
  }

}


export function dropzone(node,options){
  let state ={
    dropEffect:'move',
    dragover_class:'active',
    ...options
  }


  function handle_dragenter(e){
    e.target.classList.add(state.dragover_class)
  }


  function handle_dragleave(e){
    e.target.classList.remove(state.dragover_class);
  }
  
  function handle_dragover(e){
    e.preventDefault();
    e.dataTransfer.dropEffect = state.dropEffect;
  }

  function handle_dropzone(e){
    e.preventDefault();
    const data =  e.dataTransfer.getData('text/plain');
    e.target.classList.remove(state.dragover_class);
    state.on_dropzone(data,e);
  }

  node.addEventListener('dragenter',handle_dragenter)
  node.addEventListener('dragleave',handle_dragleave);
  node.addEventListener('dragover',handle_dragover)
  node.addEventListener('drop',handle_dropzone)

  return{
    destroy(){
      node.removeEventListener('dragenter',handle_dragenter)
      node.removeEventListener('dragleave',handle_dragleave)
      node.removeEventListener('dragover',handle_dragover)
      node.removeEventListener('drop',handle_dropzone)
    }
  }

  
}
