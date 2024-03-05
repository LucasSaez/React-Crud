import React from 'react'; 
import { TabMenu } from 'primereact/tabmenu';
import { useNavigate } from 'react-router-dom'




const Navbar = () => {
  const navigate = useNavigate()

    const items = [
        {label: 'Usuarios', icon: 'pi pi-fw pi-home', command: () => navigate('/') },
        {label: 'Publicaciones', icon: 'pi pi-fw pi-calendar',command: () => navigate('/Publicaciones')  }
    ];

  return (
    <div className="card">
    <TabMenu model={items} />
</div>
  )
}
export default Navbar