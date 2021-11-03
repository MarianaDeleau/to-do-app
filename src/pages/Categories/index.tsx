import { FC, FormEvent, useState } from 'react'
import { Form } from 'react-bootstrap';
import { Layout } from '../../components';
import { useAuth } from '../../hooks';
import { createCategory } from './api'


const defaultValues = {
    category: "",
    user: "",
}
  
const Categories: FC = () => {
    
    const [category, setCategory] = useState(defaultValues);
    
    const { userSession } = useAuth()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        createCategory({ ...category, user: userSession.id })
      };


    return (
        <>
        <Layout mainClass="login">
        <h4>Por favor ingrese su nueva categoría:</h4>
        <Form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Categoría</label>
            <input
              id="category"
              type="text"
              name="category"
              value={category.category}
                        onChange={(e) => setCategory({ ...category, category: e.target.value })}
            />
          </div>          
          <button type="submit">Crear categoría</button>
        </Form>
            </Layout>
            
        </>
    )

}

export {Categories}