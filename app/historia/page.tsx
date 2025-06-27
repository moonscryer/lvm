"use client";

import { useState } from "react";
import HeroSection from "@/components/ui/hero-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  Crown,
  Sword,
  Skull,
  Mountain,
  Wand,
  Eye,
  Flower,
  Wand2,
} from "lucide-react";
import { cn } from "@/lib/utils";

const timelineEvents = [
  {
    year: "231 A.C.",
    title: "A Chegada de Senahaddon",
    period: "O Primeiro Profeta Dyático",
    description:
      "O velho eremita Senahaddon traz aos balmutes a palavra de Dyadis, tornando-se seu primeiro profeta.",
    details:
      "O viajante misterioso de terras distantes chega às margens do rio Bal. Ele traz consigo uma mensagem divina que mudaria o curso da história. Através de sua visão e carisma, ele une os balmutes sob a fé em Dyadis, estabelecendo as bases para a civilização que se ergueria nas próximas eras.",
    icon: Wand,
    color: "from-blue-600 to-teal-600",
  },
  {
    year: "49 A.C.",
    title: "A Verdade Ascética",
    period: "Palavras do Último Profeta",
    description:
      "Mytra Al-Wazif apresenta um tomo após dois anos de isolamento no Monte Farash.",
    details:
      "O sábio emerge de seu retiro com um livro sagrado que contém os ensinamentos finais de Dyadis. Acrescentando às palavras de Senahaddon, este tomo, conhecido como 'A Verdade Ascética', se torna a base da religião dyadista, unindo o povo do deserto sob uma única fé e reafirmando as diretrizes morais e espirituais que guiariam os fiéis por mil anos.",
    icon: Eye,
    color: "from-indigo-600 to-blue-600",
  },
  {
    year: "1",
    title: "Fundação do Império Wazif",
    period: "O Começo de uma Era",
    description:
      "O Império Wazif nasce sob a égide de Sulad Al-Wazif. A convenção de Partha vê este como o ano primeiro do calendário.",
    details:
      "Sulad ibn Sayyid unifica as tribos do deserto, conquistando até mesmo a subservência dos nômades cazares. Anuk é estabelecida como a capital do novo império, e o calendário é reconfigurado para marcar o início de uma nova era. O Império Wazif se torna o centro cultural e comercial do mundo.",
    icon: Crown,
    color: "from-amber-600 to-yellow-600",
  },
  {
    year: "222",
    title: "A Fé do Lírio Branco",
    period: "Nascimento da Nova Religião",
    description:
      "A fé politeísta do Lírio Branco surge entre os povos do centro de Partha. Os seis deuses representam as pétalas do lírio sagrado.",
    details:
      "A religião do Lírio Branco começa a se espalhar entre as tribos das florestas, planícies e pântanos de Partha. Seus rituais e festivais celebram as estações e a harmonia com a terra, contrastando com a fé monoteísta ascética da religião dyadista. Essa nova crença traz uma era de renovação espiritual e cultural.",
    icon: Flower,
    color: "from-purple-600 to-indigo-600",
  },
  {
    year: "406",
    title: "Reino de Fhearann",
    period: "As Conquistas de Lucardis",
    description:
      "A lendária guerreira-loba Lucardis funda o Reino de Fhearann ao subjugar as tribos centrais de Partha sob sua liderança.",
    details:
      "Lucardis 'a Loba' conquista as tribos guerreiras do centro de Partha. Ela estabelece um reino poderoso e respeitado, onde o trabalho e a honra são os principais valores. Fhearann se solidifica e Lucardis é reverenciada como a fundadora da nação.",
    icon: Crown,
    color: "from-green-700 to-green-600",
  },
  {
    year: "662",
    title: "A Ascensão do Talassismo",
    period: "Difusão do Conhecimento Proibido",
    description:
      "Uma heresia dyadista, conhecida como talassismo, se espalha em segredo entre os estudiosos do mundo que buscam a sabedoria oculta sobre a vida e a morte.",
    details:
      "Apesar de estritamente proibida sob pena de morte, a deturpação da fé seduz os eruditos e os tenta a aprender a manipular osso, carne e espírito. Muitos necromantes trabalham nas sombras, pervertendo as doutrinas estabelecidas.",
    icon: Skull,
    color: "from-green-800 to-gray-900",
  },
  {
    year: "826",
    title: "O Alto Reino de Trondheim",
    period: "Unificação dos Clãs do Norte",
    description:
      "Os ferozes jarldoms do Norte se unem sob a Alta Rainha Edda Runadottir, Mãe dos Clãs, após um período de guerras sangrentas num inverno brando.",
    details:
      "Após anos de conflitos tribais, Edda torna-se líder dos clãs do norte e estabelece Trondelag como a capital do novo reino. Ela é coroada a primeira Alta Rainha, trazendo uma era de irmandade e prosperidade para o norte.",
    icon: Mountain,
    color: "from-gray-500 to-blue-600",
  },
  {
    year: "891",
    title: "A Agressão Umeraque",
    period: "Surgimento do Principado Púrpura",
    description:
      "Seguidores do misterioso sábio louco Umerac usam alta magia para conquistar o Vale dos Sussurros e construir nele a cidade de mármore.",
    details:
      "Conhecidos como umeraques, os fiéis do astrólogo utilizam magia poderosa para estabelecer um principado isolacionista. A cidadela intransponível é um lugar de mistérios arcanos onde nenhum visitante é bem-vindo, de onde invasores nunca retornam.",
    icon: Wand2,
    color: "from-indigo-700 to-purple-800",
  },
];

export default function History() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  return (
    <div className="bg-stone-950 min-h-screen">
      <HeroSection
        title="Crônicas das Eras"
        subtitle="Uma jornada de séculos de história que moldaram Partha"
      />

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 parchment rounded-3xl p-12 mx-4 shadow-2xl border-4 border-amber-600/30">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 font-cinzel">
            A Linha do Tempo
          </h2>
          <p className="text-lg md:text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed font-sans font-semibold">
            Explore os eventos mais significativos que tornaram Partha o mundo
            que é hoje.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-2 bg-gradient-to-b from-amber-600 via-amber-500 to-red-600 transform md:-translate-x-1 shadow-lg shadow-amber-600/50 border border-amber-400/30" />

          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const Icon = event.icon;
              const isLeft = index % 2 === 0;
              const isSelected = selectedEvent === index;

              return (
                <div
                  key={index}
                  className={cn(
                    "relative flex items-center",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full border-4 border-stone-900 transform -translate-x-4 md:-translate-x-4 z-10 shadow-lg shadow-amber-500/50" />

                  {/* Year badge */}
                  <div className="absolute left-20 md:left-1/2 transform md:-translate-x-1/2 -translate-y-12 md:-translate-y-16">
                    <Badge className="bg-gradient-to-r from-amber-700 to-amber-600 text-amber-100 px-6 py-3 text-base font-bold shadow-lg border-2 border-amber-500/50 font-sans">
                      {event.year}
                    </Badge>
                  </div>

                  {/* Content card */}
                  <div
                    className={cn(
                      "ml-20 md:ml-0 w-full md:w-5/12",
                      isLeft ? "md:mr-auto md:pr-16" : "md:ml-auto md:pl-16"
                    )}
                  >
                    <Card
                      className={cn(
                        "cursor-pointer transition-all duration-500 border-2 border-amber-600/30 bg-stone-900 rounded-3xl group stone-texture",
                        isSelected
                          ? "ring-4 ring-amber-500 shadow-2xl shadow-amber-500/25 scale-105"
                          : "hover:shadow-xl hover:shadow-amber-500/25 hover:scale-102"
                      )}
                      onClick={() =>
                        setSelectedEvent(isSelected ? null : index)
                      }
                    >
                      <CardHeader className="pb-4 p-8 border-b border-amber-600/20">
                        <div className="flex items-center space-x-4">
                          <div
                            className={`p-4 rounded-full bg-gradient-to-r ${event.color} group-hover:scale-110 transition-transform duration-300 border-2 border-white/30`}
                          >
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="flex-1">
                            <CardTitle className="text-amber-300 text-2xl font-cinzel">
                              {event.title}
                            </CardTitle>
                            <CardDescription className="text-stone-400 font-medium font-sans text-lg">
                              {event.period}
                            </CardDescription>
                          </div>
                        </div>
                      </CardHeader>

                      <CardContent className="pt-0 px-8 pb-8">
                        <p className="text-stone-300 mb-4 leading-relaxed font-sans text-lg">
                          {event.description}
                        </p>

                        {isSelected && (
                          <div className="mt-6 p-6 bg-amber-900/20 rounded-2xl border-2 border-amber-500/30">
                            <p className="text-stone-300 leading-relaxed font-sans text-lg">
                              {event.details}
                            </p>
                          </div>
                        )}

                        <Button
                          variant="ghost"
                          size="sm"
                          className="mt-4 text-amber-400 hover:text-amber-300 hover:bg-amber-400/10 p-0 font-medium font-sans text-base"
                        >
                          {isSelected ? "Fechar" : "Leia mais"}
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Historical Context */}
        <section className="mt-20 relative rounded-3xl p-12 text-amber-50 overflow-hidden stone-texture border-4 border-amber-600/30 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-800/80 via-stone-900/90 to-amber-900/20"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-10 font-cinzel text-amber-200 glow-text">
              Lendas do Velho Mundo
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-600/20 to-amber-700/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors duration-300 border-2 border-amber-600/40">
                  <Calendar className="h-10 w-10 text-amber-400" />
                </div>
                <h4 className="text-2xl font-semibold mb-4 font-cinzel text-amber-300">
                  Mil Anos de História
                </h4>
                <p className="text-stone-300 leading-relaxed font-sans text-lg">
                  As crônicas abrangem mais de mil anos de eventos gloriosos e
                  grandes tragédias
                </p>
              </div>
              <div className="text-center group">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-600/20 to-amber-700/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors duration-300 border-2 border-amber-600/40">
                  <Crown className="h-10 w-10 text-amber-400" />
                </div>
                <h4 className="text-2xl font-semibold mb-4 font-cinzel text-amber-300">
                  Linhagens Notórias
                </h4>
                <p className="text-stone-300 leading-relaxed font-sans text-lg">
                  Monarcas absolutos, deuses-reis e heróis populares
                  reivindicaram seus mandatos em prol de glória e poder
                </p>
              </div>
              <div className="text-center group">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-600/20 to-amber-700/30 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-500/30 transition-colors duration-300 border-2 border-amber-600/40">
                  <Sword className="h-10 w-10 text-amber-400" />
                </div>
                <h4 className="text-2xl font-semibold mb-4 font-cinzel text-amber-300">
                  Era do Bronze
                </h4>
                <p className="text-stone-300 leading-relaxed font-sans text-lg">
                  Um tempo definido por guerras sangrentas e conquistas, seja
                  por fé, território ou recursos
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
