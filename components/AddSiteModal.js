import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import { createSite } from '@/lib/db';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  ButtonGroup
} from '@chakra-ui/react';

export default function AddSiteModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onCreateSite = (data) => console.log(data);

  return (
    <>
      <Button fontWeight="bold" variant="solid" size="md" onClick={onOpen}>
        Add Your First Site
      </Button>

      <Modal initialFocusRef={initialRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent as="form" onSubmit={handleSubmit(onCreateSite)}>
          <ModalHeader fontWeight="bold"> Add Site </ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                name="site"
                ref={initialRef}
                placeholder="My site"
                {...register('site', { required: 'Required' })}
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Link</FormLabel>
              <Input
                id="site-input"
                placeholder="My site"
                name="name"
                {...register('name', { required: 'Required' })}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <ButtonGroup>
              <Button onClick={onClose}>Cancel</Button>
              <Button
                backgroundColor="#99FFFE"
                color="#194D4C"
                mr={3}
                type="submit"
                loadingText="Creating"
              >
                Create
              </Button>
            </ButtonGroup>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
