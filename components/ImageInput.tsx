import { FormControl, FormLabel, useColorMode } from '@chakra-ui/react'
import Dropzone from 'react-dropzone'
import ImageIcon from './icons/ImageIcon'
import { useState } from 'react'
import { useRaffleStore } from '@/stores/raffleStore'
import ImageInputText from './ImageInputText'
import { shallow } from 'zustand/shallow'

function useRaffleImageInputStore() {
  return useRaffleStore(state => ({
    image: state.image,
    setImage: state.setImage
  }), shallow)
}

export default function ImageInput({ title }: { title: string }) {
  const [isDragActive, setIsDragActive] = useState<boolean>(false)
  const { image, setImage } = useRaffleImageInputStore()
  const { colorMode } = useColorMode()

  const uploadImage = (acceptedFiles: File[]) => {
    setImage(URL.createObjectURL(acceptedFiles[0]))
  }

  return (
    <FormControl isInvalid={false} className='w-full'>
      <FormLabel marginBottom={2.5}>{title}</FormLabel>
      <Dropzone
        onDrop={uploadImage}
        onDragEnter={() => {
          setIsDragActive(true)
        }}
        onDragLeave={() => {
          setIsDragActive(false)
        }}
        maxFiles={1}
        accept={{ 'image/jpeg': ['.jpeg'], 'image/png': ['.png'] }}
      >
        {({ getRootProps, getInputProps }) => (
          <section>
            <div
              {...getRootProps()}
              className={`flex gap-x-1 justify-center items-center text-xs cursor-pointer transition-all outline-dashed outline-2 ${
                colorMode === 'light' ? 'outline-gray-300' : 'outline-zinc-600'
              } p-2 rounded-md ${isDragActive ? 'bg-gray-500/20' : ''}`}
            >
              <input {...getInputProps()} />
              <ImageIcon width={20} height={20} />
              <ImageInputText isDragActive={isDragActive} image={image} />
            </div>
          </section>
        )}
      </Dropzone>
    </FormControl>
  )
}
