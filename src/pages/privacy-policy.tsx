import { Container } from '@/components/Container'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import Head from 'next/head'

export default function PrivacyPolicy() {
  return (
    <>
      <Head>
        <title>Road to Blockchain Week</title>
        <meta name="description" content="Road to Blockchain Week" />
      </Head>
      <Navbar hasBackground />
      <main>
        <section id="about" className="px-5 py-10 sm:py-20">
          <Container className="relative z-10">
            <div className="flex flex-col items-center justify-center gap-2">
              <h2 className="text-center font-display text-4xl font-medium tracking-tighter text-blue-600 sm:text-5xl md:text-5xl">
                TÉRMINOS Y CONDICIONES DE USO DE ETHEREUM MITAD DEL MUNDO S.A.S
                B.I.C
              </h2>
              <Paragraph
                subtitle="1.	PRIMERA.- OBJETO"
                paragraph={`Los presentes Términos y Condiciones regulan el acceso y uso del sitio web https://www.eth-tricolor.org/ (en adelante, el "Eth tri color") propiedad de Ethereum mitad del mundo S.A.S B.I.C en adelante Ethereum mitad del mundo, cuya finalidad principal es difundir, crear, compartir y desarrollar eventos de tecnología, ofrecer servicios de asesoría y consultoría en desarrollo de software en blockchain y venta de cursos, mercadería y artículos relacionados con dicha materia.`}
              />
              <Paragraph
                subtitle="2.	SEGUNDA. - ACEPTACIÓN DE LOS TÉRMINOS Y CONDICIONES"
                paragraph={`El acceso y uso del sitio web por parte del usuario implica su plena aceptación de manera libre, específica, informada e inequívoca compromiso de cumplir con los presentes Términos y Condiciones. Si el usuario no está de acuerdo con estos Términos y Condiciones, debe abstenerse de acceder y utilizar el sitio web.`}
              />
              <Paragraph
                subtitle="3.	TERCERA.- SERVICIOS OFRECIDOS"
                paragraph={`Ethereum mitad del mundo S.A.S B.I.C ofrece a través de su sitio web los siguientes servicios:`}
              >
                <ul>
                  <li>
                    Difusión, desarrollo, creación y comunicación de eventos,
                    talleres, cursos y demás.
                  </li>
                  <li>
                    Asesoría en desarrollo de software en blockchain: Ethereum
                    mitad del mundo S.A.S B.I.C proporciona servicios de
                    asesoría en el diseño, desarrollo e implementación de
                    soluciones basadas en tecnología blockchain.
                  </li>
                  <li>
                    Venta de cursos, mercadería, artículos del entorno
                    blockchain: Ethereum mitad del mundo S.A.S B.I.C ofrece
                    cursos en línea y presenciales relacionados con el
                    desarrollo de software en blockchain, incluyendo cursos
                    introductorios, intermedios y avanzados. Además de mercancía
                    con artículos y demás elementos del ecosistema blockchain.
                  </li>
                </ul>
              </Paragraph>
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="5.	QUINTA.- PROPIEDAD INTELECTUAL E INDUSTRIAL"
                paragraph={`Todos los contenidos del sitio web, incluyendo, pero no limitado a, textos, imágenes, fotografías, logotipos, diseños, marcas, software, aplicaciones y cualquier otro material, son propiedad de Ethereum mitad del mundo S.A.S B.I.C o de terceros que hayan autorizado su uso. Estos contenidos están protegidos por las leyes nacionales e internacionales de propiedad intelectual e industrial. Queda expresamente prohibida la reproducción, distribución, comunicación pública, transformación o cualquier otra forma de explotación de los contenidos sin la autorización expresa y por escrito de Ethereum mitad del mundo S.A.S B.I.C o del titular correspondiente.`}
              />
              <Paragraph
                subtitle="6.	SEXTA.- RESPONSABILIDAD"
                paragraph={`Ethereum mitad del mundo S.A.S B.I.C no será responsable, en ningún caso, de:`}
              >
                <ul>
                  <li>
                    Los daños y perjuicios de cualquier tipo que puedan
                    derivarse del acceso, uso o mal uso del sitio web o de sus
                    contenidos, así como de los errores u omisiones en los
                    contenidos o en la prestación de los servicios.
                  </li>
                  <li>
                    La calidad, fiabilidad, exactitud o veracidad de la
                    información proporcionada por terceros en el sitio web, así
                    como de los enlaces a otros sitios web que se encuentren en
                    él.
                  </li>
                  <li>
                    Los daños y perjuicios de cualquier tipo que puedan
                    derivarse de la utilización indebida de la información
                    proporcionada en los cursos y asesorías de desarrollo de
                    software en blockchain, incluyendo la pérdida de datos,
                    ingresos o beneficios.
                  </li>
                  <li>
                    Los daños y perjuicios de cualquier tipo que puedan
                    derivarse de los productos, artículos, mercadería y demás
                    distribuidos en el sitio web.
                  </li>
                </ul>
              </Paragraph>
              <Paragraph
                subtitle="7.	SÉPTIMA.- LEGISLACIÓN APLICABLE Y JURISDICCIÓN"
                paragraph={`Los presentes Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la Republica del Ecuador donde se encuentre registrada la empresa Ethereum mitad del mundo S.A.S B.I.C . Para la resolución de cualquier controversia o discrepancia que pudiera surgir en relación con la interpretación o ejecución de estos Términos y Condiciones, las partes se someten a la jurisdicción de los tribunales competentes del mismo país.`}
              />
              <Paragraph
                subtitle="8.	OCTAVA.- CONTACTO"
                paragraph={`Para cualquier consulta o comunicación relacionada con los presentes Términos y Condiciones, el usuario podrá contactar con Ethereum mitad del mundo S.A.S B.I.C a través de la dirección de correo electrónico support@eth-tricolor.org`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="4.	CUARTA.- REGISTRO DE USUARIOS Y PROTECCIÓN DE DATOS"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}

function Paragraph({
  subtitle,
  paragraph,
  children,
}: {
  subtitle: string
  paragraph: string
  children?: React.ReactNode
}) {
  return (
    <div className="flex flex-col">
      <h2 className="font-display text-2xl font-medium tracking-tighter text-blue-600 md:text-3xl">
        {subtitle}
      </h2>
      <p className="mb-4 text-justify font-display text-base font-normal tracking-tight text-blue-900">
        {paragraph}
      </p>
      <div className="mb-4 text-justify font-display text-base font-normal tracking-tight text-blue-900">
        {children}
      </div>
    </div>
  )
}
