import * as S from './styled';

import * as React from 'react';

import Tabs from '@mui/material/Tabs';

import Tab from '@mui/material/Tab';

import Formulario from './Formulario';
import {NavBarTerciaria} from '../../Components/NavBar/NavBar'
import BoxBlack from '../../Components/img/Box-Black.jpg';
import { Link } from 'react-router-dom';
import  StepperArea from '../../Components/Stepper/Stepper';
import { useState } from 'react';
import MenuMobile from '../../Components/MenuMobile/MenuMobile';


export default function Payment() {

  const [value, setValue] = React.useState(0);
    const [form,setForm]=useState(1)
  const handleChange = (event, newValue) => {

    setValue(newValue);

  };


  return (
      <>
      <NavBarTerciaria location={'/delivery'}></NavBarTerciaria>
      <StepperArea props={3}></StepperArea>
      <S.Pagamento>
    <S.Dados>
    <S.DadosCliente>
        <h3>Dados do cliente</h3>
        <div>
            <div>
            <p>Nome:</p> <span>Kauê Leite</span>
            </div>
            <div>
            <p>Email:</p> <span>Kaue@gmail.com</span>
            </div>
        </div>
    </S.DadosCliente>
    <S.DadosEntrega>
        <h3> Endereço de entrega</h3>
        <div>
            <div>
            <p><i className="im im-location"></i>Kaue</p>
            </div>
            <div>
            <span>Av. Engenheiro Luís Carlos Berrini</span>

            </div>
            <div>
            <span>São Paulo</span>
            <span>São Paulo</span>

            </div>
            <div>
            <span>Brazil 04571-010</span>
            </div>
            <Link style={{textDecoration:'none'}}  to='/address'>
            <button>Alterar endereço</button>
            </Link>
        </div>
    </S.DadosEntrega>

    <S.OpçoesEntrega>
            <h3><img src={BoxBlack} alt=''/>Opção de entrega</h3>
            
        </S.OpçoesEntrega>
    </S.Dados>
    
   <S.Container>

   <S.OpçoesEntrega>

            <h3><img src={BoxBlack} alt=''/>Opções de pagamento</h3>
           
        </S.OpçoesEntrega>

   <S.BodyCard>

    <Tabs style={{width:'auto', display:'flex', flexDirection:'row'}}value={value} onChange={handleChange} aria-label="icon label tabs example">


      <Tab style={{width:'15.9%', fontSize:'12px'}} onClick={()=>setForm(1)} icon={<svg height="30" viewBox="0 0 27 22"><path d="M27 2.29v17.42c0 .63-.221 1.17-.662 1.618-.44.449-.97.673-1.588.673H2.25a2.147 2.147 0 0 1-1.589-.673 2.228 2.228 0 0 1-.66-1.619V2.29C0 1.66.22 1.12.66.672c.441-.45.97-.673 1.59-.673H24.75c.618 0 1.148.224 1.588.673.44.449.661.988.661 1.618zM25.2 11H1.8v8.71c0 .124.045.23.134.322a.43.43 0 0 0 .316.136h22.5a.43.43 0 0 0 .316-.136.445.445 0 0 0 .133-.322zm0-5.501V2.29a.445.445 0 0 0-.134-.322.428.428 0 0 0-.316-.136H2.25a.43.43 0 0 0-.316.136.444.444 0 0 0-.133.322V5.5zM3.6 16.5h3.6v1.833H3.6zm5.4 0h5.4v1.833H9z"></path></svg>} label="Crédito" />

      <Tab style={{width:'15.9%', fontSize:'12px'}}  onClick={()=>setForm(2)} icon={<svg height="30" viewBox="0 0 27 22"><path d="M27 2.29v17.42c0 .63-.221 1.17-.662 1.618-.44.449-.97.673-1.588.673H2.25a2.147 2.147 0 0 1-1.589-.673 2.228 2.228 0 0 1-.66-1.619V2.29C0 1.66.22 1.12.66.672c.441-.45.97-.673 1.59-.673H24.75c.618 0 1.148.224 1.588.673.44.449.661.988.661 1.618zM25.2 11H1.8v8.71c0 .124.045.23.134.322a.43.43 0 0 0 .316.136h22.5a.43.43 0 0 0 .316-.136.445.445 0 0 0 .133-.322zm0-5.501V2.29a.445.445 0 0 0-.134-.322.428.428 0 0 0-.316-.136H2.25a.43.43 0 0 0-.316.136.444.444 0 0 0-.133.322V5.5zM3.6 16.5h3.6v1.833H3.6zm5.4 0h5.4v1.833H9z" fill="#555"></path></svg>} label="Débito" />

      <Tab style={{width:'18%', fontSize:'12px'}}  onClick={()=>setForm(3)} icon={<svg height="30" viewBox="0 0 33 27"><path d="M29 7.108v17.783C29 26.054 28.086 27 26.962 27H2.038C.914 27 0 26.054 0 24.89V7.108C0 5.946.914 5 2.038 5h24.924C28.086 5 29 5.946 29 7.108zm-.967 0c0-.61-.48-1.108-1.071-1.108H2.038c-.59 0-1.071.497-1.071 1.108v17.783c0 .611.48 1.109 1.071 1.109h24.924c.59 0 1.071-.498 1.071-1.109zM8.217 20c0 .276-.216.5-.484.5h-4.35A.492.492 0 0 1 2.9 20c0-.276.216-.5.483-.5h4.35c.268 0 .484.224.484.5zm6.283 0c0 .276-.216.5-.483.5h-4.35a.492.492 0 0 1-.484-.5c0-.276.216-.5.484-.5h4.35c.267 0 .483.224.483.5zM4.35 22.5c0 .276-.216.5-.483.5h-.484a.492.492 0 0 1-.483-.5c0-.276.216-.5.483-.5h.484c.267 0 .483.224.483.5zm2.9 0c0 .276-.216.5-.483.5H5.8a.492.492 0 0 1-.483-.5c0-.276.216-.5.483-.5h.967c.267 0 .483.224.483.5zm2.417 0c0 .276-.216.5-.484.5H8.7a.492.492 0 0 1-.483-.5c0-.276.216-.5.483-.5h.483c.268 0 .484.224.484.5zm2.9 0c0 .276-.216.5-.484.5h-.966a.492.492 0 0 1-.484-.5c0-.276.216-.5.484-.5h.966c.268 0 .484.224.484.5zm1.793-.355c.087.095.14.225.14.355 0 .13-.053.26-.14.355a.5.5 0 0 1-.343.145.499.499 0 0 1-.344-.145.533.533 0 0 1-.14-.355c0-.13.053-.26.14-.355.174-.185.503-.185.687 0zM26.583 21c0 1.93-1.518 3.5-3.383 3.5a3.276 3.276 0 0 1-1.692-.474 3.276 3.276 0 0 1-1.691.474c-1.866 0-3.384-1.57-3.384-3.5s1.518-3.5 3.384-3.5c.616 0 1.193.174 1.691.473A3.276 3.276 0 0 1 23.2 17.5c1.865 0 3.383 1.57 3.383 3.5zm-5.075-1.781a2.533 2.533 0 0 0-.725 1.78c0 .698.279 1.328.725 1.782A2.533 2.533 0 0 0 22.233 21c0-.697-.278-1.327-.725-1.781zM19.817 23.5c.305 0 .594-.065.863-.173A3.55 3.55 0 0 1 19.817 21c0-.894.328-1.709.863-2.328a2.322 2.322 0 0 0-.863-.172c-1.333 0-2.417 1.121-2.417 2.5 0 1.378 1.084 2.5 2.417 2.5zm5.8-2.5c0-1.379-1.084-2.5-2.417-2.5-.305 0-.595.065-.864.172A3.55 3.55 0 0 1 23.2 21a3.55 3.55 0 0 1-.864 2.327c.27.108.559.173.864.173 1.333 0 2.417-1.122 2.417-2.5zM2.9 14.872v-4.745C2.9 9.506 3.39 9 3.99 9h6.52c.6 0 1.09.506 1.09 1.127v4.745c0 .622-.49 1.128-1.09 1.128H3.99c-.6 0-1.09-.506-1.09-1.128zM5.8 12H3.867v1H5.8zm-1.81 3h1.823c-.005-.043-.013-.084-.013-.128V14H3.867v.872c0 .07.055.128.123.128zm6.643-3.013c-.04.005-.08.013-.123.013H8.823a.125.125 0 0 0-.123.127V13h1.933zm0 2.885V14H8.7v.872c0 .044-.008.085-.013.128h1.823a.125.125 0 0 0 .123-.128zM6.89 10a.125.125 0 0 0-.123.127v4.745c0 .07.055.128.123.128h.72a.125.125 0 0 0 .123-.128v-2.745c0-.621.49-1.127 1.09-1.127h1.687a.125.125 0 0 0 .123-.128v-.745A.125.125 0 0 0 10.51 10zm-3.023.127V11H5.8v-.873c0-.043.008-.085.013-.127H3.99a.125.125 0 0 0-.123.127z" fill="#555"></path><path d="M6 6h26v15H6z" fill="#fff" class="inverse"></path><path d="M33 2.29v17.42c0 .63-.221 1.17-.662 1.618-.44.449-.97.673-1.588.673H8.25a2.147 2.147 0 0 1-1.589-.673 2.228 2.228 0 0 1-.66-1.619V2.29c0-.63.22-1.17.66-1.618.441-.45.97-.674 1.59-.674H30.75c.618 0 1.148.225 1.588.674.44.449.661.988.661 1.618zM31.2 11H7.8v8.71c0 .124.045.23.134.322a.43.43 0 0 0 .317.136H30.75a.429.429 0 0 0 .316-.136.445.445 0 0 0 .133-.323zm0-5.501V2.29a.445.445 0 0 0-.134-.322.428.428 0 0 0-.316-.136H8.25a.43.43 0 0 0-.316.136.444.444 0 0 0-.133.322V5.5zM9.6 16.5h3.6v1.833H9.6zm5.4 0h5.4v1.833H15z" fill="#555"></path></svg>} label="2 Cartões" />

      <Tab style={{width:'16%', fontSize:'12px'}}  onClick={()=>setForm(4)} icon={<svg height="30" viewBox="0 0 30 23"><path d="M29.995 3.319V19.7c0 1.825-1.491 3.3-3.326 3.3H3.322a3.306 3.306 0 0 1-3.318-3.3V3.32A3.323 3.323 0 0 1 3.322 0H26.67a3.329 3.329 0 0 1 3.326 3.319zm-2.043 16.38V3.32c0-.706-.566-1.273-1.283-1.273H3.322c-.717 0-1.314.567-1.314 1.273v16.38c0 .706.597 1.293 1.314 1.293h23.346c.718 0 1.283-.587 1.283-1.293zM5.207 5.675v11.669c0 .56-.442 1.014-1.002 1.014s-1.002-.454-1.002-1.014V5.674c0-.56.442-1.014 1.002-1.014s1.003.454 1.002 1.015zm4.396.676v6.215a1.68 1.68 0 0 1-1.677 1.691 1.68 1.68 0 0 1-1.677-1.691V6.351a1.68 1.68 0 0 1 1.677-1.69 1.68 1.68 0 0 1 1.677 1.69zm3.044-.676v7.567a1.02 1.02 0 0 1-2.042 0V5.674a1.02 1.02 0 1 1 2.043 0zm4.395.676v6.215a1.696 1.696 0 0 1-3.392 0V6.351a1.696 1.696 0 0 1 3.392 0zm3.007-.676v7.567c0 .56-.442 1.015-1.002 1.015s-1.002-.454-1.002-1.015V5.674c0-.56.442-1.014 1.002-1.014s1.002.454 1.002 1.015zm4.394.676v6.215a1.696 1.696 0 0 1-3.392 0V6.351a1.696 1.696 0 0 1 3.392 0zm2.352-1.014v12.345a.675.675 0 1 1-1.348 0V5.337a.675.675 0 1 1 1.348 0zm-2.351 12.061c0 .554-.449 1.003-1.001 1.003H7.33a1.002 1.002 0 0 1-1.002-1.003v-1.28c0-.554.449-1.003 1.002-1.003h16.11c.554 0 1.002.449 1.002 1.002v1.281z" fill="#555"></path></svg>} label="Boleto" />

      <Tab style={{width:'16%', fontSize:'12px'}}  onClick={()=>setForm(5)} icon={<img alt='' src="https://www.pneustore.com.br/_ui/responsive/theme-pneustorePurple/images/logo-pix.svg" width="35"></img>} label="Pix" />

      <Tab style={{width:'18%', fontSize:'12px'}}  onClick={()=>setForm(6)} icon={<img alt='' src="https://darujme.sk/wp-content/uploads/2020/09/google-pay-gpay-logo.png" width="50"></img>} label="Google Pay" />


    </Tabs>

    </S.BodyCard>

    <Formulario form={form}></Formulario>
    { form<=5?(
       <Link to='/resume'> 
    <S.Button>Próximo</S.Button>
    </Link>
    ):(
        null
    )
    }
    </S.Container>
    <MenuMobile></MenuMobile> 

    </S.Pagamento>
   
 </>  
  )
}