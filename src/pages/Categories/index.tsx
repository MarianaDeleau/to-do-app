import { FC, FormEvent, useEffect, useState } from 'react'
import { Card, Form } from 'react-bootstrap';
import { Layout } from '../../components';
import { CategoryWrapper } from '../../components/parts';
import { WithAuth } from '../../hoc';
import { useAuth } from '../../hooks';
import { Category } from '../../types';
import { createCategory, getCategories } from './api'


const defaultValues = {
    category: "",
    user: "",
}
  
const Categories: FC = () => {
    
    const [category, setCategory] = useState(defaultValues);
  const [categoryCard, setCategoryCard] = useState<Category[]>()
  
    const { userSession } = useAuth()
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        createCategory({ ...category, user: userSession.id })
      };

      useEffect(() => {
        getCategories().then((response) => {
          setCategoryCard(response);
        });
      },);
    

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
            
                <CategoryWrapper>
            {categoryCard?.map((item) => {
              if (userSession.id === item.user) {
                return (
                  <Card style={{ width: '15rem' }} className="cardTask shadow-lg p-3 mb-5 bg-body rounded" data-id={item.id}>
                    <Card.Body>
                      <Card.Title className="fw-bold h4">{item.category}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted fs-6 fw-normal">Usuario:{userSession.name}</Card.Subtitle>
                    </Card.Body>
                  </Card>
                )
              }
              return ''
            })}
              </CategoryWrapper>
        </Layout>
        </>
    )

}

export const CategoriesPage = WithAuth(Categories);