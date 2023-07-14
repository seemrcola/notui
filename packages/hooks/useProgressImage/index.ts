import { onMounted } from 'vue'

export function useProgressImage() {
  function ProgressEvent() {
    const imagesToLoad = document.querySelectorAll('img[data-src]') as unknown as HTMLImageElement[]
    const loadImages = (image: HTMLImageElement) => {
      image.setAttribute('src', image.getAttribute('data-src')!)
      image.onload = () => {
        image.removeAttribute('data-src')
      }
    }

    imagesToLoad.forEach((img: HTMLImageElement) => {
      loadImages(img)
    })
  }
  onMounted(() => ProgressEvent())
}
