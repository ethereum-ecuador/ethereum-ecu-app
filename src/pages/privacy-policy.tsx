import { Container } from '@/components/common'
import { Footer } from '@/components/footer'
import { Navbar } from '@/components/navbar'
import { Paragraph } from '@/components/paragraph'
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
        <section id="about" className="px-5 py-24">
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
                <ul className="list-disc">
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
                <ul className="list-disc">
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
                subtitle="9.	NOVENA.- INTEGRIDAD DEL ACUERDO"
                paragraph={`Si alguna disposición de estos Términos y Condiciones es considerada inválida o inaplicable por un tribunal de justicia competente, dicha disposición será eliminada o limitada en la medida mínima necesaria, y las disposiciones restantes continuarán en pleno vigor y efecto.`}
              />
              <Paragraph
                subtitle="10.	DÉCIMA.- RENUNCIA"
                paragraph={`La falta de ejercicio o aplicación de cualquier derecho o disposición contenida en estos Términos y Condiciones por parte de Ethereum mitad del mundo S.A.S B.I.C no constituirá una renuncia a dicho derecho o disposición.`}
              />
              <Paragraph
                subtitle="11.	DÉCIMO PRIMERA.- CESIÓN"
                paragraph={`Para acceder a determinados servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C a través de su sitio web, el usuario deberá registrarse y proporcionar información personal. Ethereum mitad del mundo S.A.S B.I.C tratará los datos personales del usuario de acuerdo con su Política de Privacidad, la cual forma parte integral de estos Términos y Condiciones.`}
              />
              <Paragraph
                subtitle="12.	DÉCIMO SEGUNDA.- TÍTULOS"
                paragraph="Los títulos de las cláusulas de estos Términos y Condiciones son meramente informativos y no afectan a la interpretación de las disposiciones contenidas en ellas."
              />
              <Paragraph
                subtitle="13.	DÉCIMO TERCERA.- MODIFICACIÓN DE LOS TÉRMINOS Y CONDICIONES"
                paragraph={`Ethereum mitad del mundo S.A.S B.I.C se reserva el derecho de modificar, en cualquier momento y sin previo aviso, estos Términos y Condiciones. Los usuarios estarán sujetos a las condiciones vigentes en el momento de acceso al sitio web o de la contratación de los servicios ofrecidos. La utilización del sitio web y/o de los servicios ofrecidos después de la publicación de modificaciones constituirá la aceptación de las nuevas condiciones por parte del usuario.`}
              />
              <Paragraph
                subtitle="14.	DÉCIMO CUARTA.- PRIVACIDAD Y PROTECCIÓN DE DATOS PERSONALES"
                paragraph={`Ethereum mitad del mundo S.A.S B.I.C se compromete a proteger la privacidad y los datos personales de los usuarios de acuerdo con la legislación aplicable. Para obtener información detallada sobre cómo Ethereum mitad del mundo S.A.S B.I.C recopila, utiliza y protege los datos personales, los usuarios deben consultar la Política de Privacidad publicada en el sitio web.`}
              />
              <Paragraph
                subtitle="15.	DÉCIMO QUINTA.- SUSPENSIÓN Y TERMINACIÓN"
                paragraph={`Ethereum mitad del mundo S.A.S B.I.C se reserva el derecho de suspender o terminar, total o parcialmente, el acceso al sitio web o la prestación de servicios en caso de incumplimiento por parte del usuario de estos Términos y Condiciones, así como de tomar las medidas legales que considere oportunas en caso de infracción.`}
              />
              <Paragraph
                subtitle="16.	DÉCIMO SEXTA.- DERECHO DE ADMISIÓN"
                paragraph={`Ethereum mitad del mundo S.A.S B.I.C se reserva el derecho de admisión y exclusión de usuarios a su sitio web y a los servicios ofrecidos, sin necesidad de previo aviso, en caso de incumplimiento de los presentes Términos y Condiciones o por cualquier otra razón que, a criterio de Ethereum mitad del mundo S.A.S B.I.C , pueda poner en riesgo la integridad, seguridad o buen funcionamiento del sitio web y los servicios.`}
              />
              <Paragraph
                subtitle="17.	DÉCIMO SEPTIMA.- SERVICIOS DE TERCEROS"
                paragraph={`Ethereum mitad del mundo S.A.S B.I.C puede ofrecer o recomendar servicios de terceros a través de su sitio web. En estos casos, los usuarios estarán sujetos a los términos y condiciones de esos terceros, y Ethereum mitad del mundo S.A.S B.I.C no será responsable de la calidad, exactitud o cumplimiento de dichos servicios.`}
              />
              <Paragraph
                subtitle="18.	DÉCIMO OCTAVA.- VIGENCIA"
                paragraph={`Los presentes Términos y Condiciones estarán vigentes mientras no sean modificados o sustituidos por otros nuevos. Ethereum mitad del mundo S.A.S B.I.C se reserva el derecho de modificar o sustituir estos Términos y Condiciones en cualquier momento y sin previo aviso.`}
              />
              <Paragraph
                subtitle="19.	DECIMO NOVENA.- INDEPENDENCIA"
                paragraph={`En caso de que cualquier disposición de estos Términos y Condiciones sea declarada nula, ilegal o inaplicable por un tribunal o autoridad competente, dicha declaración no afectará al resto de disposiciones, que continuarán siendo válidas y aplicables en la medida en que lo permita la ley.`}
              />
              <Paragraph
                subtitle="20.	VIGÉSIMA.- LEY APLICABLE Y JURISDICCIÓN"
                paragraph={`Estos Términos y Condiciones se regirán e interpretarán de acuerdo con las leyes de la Republica del Ecuador en el que se encuentre registrada Ethereum mitad del mundo S.A.S B.I.C . Cualquier controversia o reclamación que surja o esté relacionada con estos Términos y Condiciones, su objeto o su ejecución, será resuelta por los tribunales competentes del mismo país.`}
              />
              <Paragraph
                subtitle="21.	VIGÉSIMA PRIMERA.- CONTACTO"
                paragraph={`Si tiene alguna pregunta, comentario o sugerencia sobre estos Términos y Condiciones, por favor póngase en contacto con Ethereum mitad del mundo S.A.S B.I.C a través de la sección de contacto en nuestro sitio web o por correo electrónico a la dirección proporcionada en el mismo.`}
              />
              <Paragraph
                paragraph={`Al utilizar este sitio web y/o contratar los servicios ofrecidos por Ethereum mitad del mundo S.A.S B.I.C , usted reconoce haber leído, entendido y aceptado de manera libre, específica, informada e inequívoca cestos Términos y Condiciones en su totalidad. Si no está de acuerdo con alguna parte de estos Términos y Condiciones, debe abstenerse de utilizar el sitio web y/o los servicios ofrecidos.`}
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
