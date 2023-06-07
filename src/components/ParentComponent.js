import { ChildComponent } from './ChildComponent'

export const ParentComponent = () => {
  const greetParent = (childName) => {
    alert(`Hello Parent from ${childName}`)
  }
  return (
    <>
      <ChildComponent greetHandler={greetParent} />
    </>
  )
}
