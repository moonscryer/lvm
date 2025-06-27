import HeroSection from "@/components/ui/hero-section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, Sun, Swords, Shield, Crown, Mountain } from "lucide-react";

const folks = [
  {
    name: "Balmutes",
    description:
      "O povo originado no deserto de Balmut, famoso por sua cortesia exagerada e sua crença de que são superiores aos demais povos.",
    origin: "Filhos do deserto e dos oásis do sul",
    traits: ["Nobreza", "Filosofia", "Herança Divina", "Ouro e Gemas"],
    abilities: ["Magia Dyática", "Catafractos Imperiais", "Meditação Profunda"],
    icon: Sun,
    color: "from-amber-600 to-yellow-600",
  },
  {
    name: "Fhearannas",
    description:
      "Herdeiros das tribos do centro-leste de Partha. Etnicamente diversos, artesãos de renome, abominam o escravagismo.",
    origin: "Antigos clãs dos pântanos e montanhas",
    traits: ["Fé do Lírio", "Artesanato", "Legionários", "Guildas"],
    abilities: [
      "Magia do Lírio",
      "Legionários Profissionais",
      "Artesanato Avançado",
    ],
    icon: Shield,
    color: "from-indigo-500 to-indigo-700",
  },
  {
    name: "Bariyanos",
    description:
      "O supersticioso povo da Floresta Negra, renomado por sua dureza, sua riqueza cultural e abundância populacional.",
    origin: "Descendentes de Barik o Ousado, do norte gélido",
    traits: ["Fé do Lírio", "Resiliência", "Ferro", "Danças Acrobáticas"],
    abilities: ["Magia do Lírio", "Guerrilha Bariyana", "Coro de Guerra"],
    icon: Crown,
    color: "from-yellow-800 to-red-950",
  },
  {
    name: "Pictos",
    description:
      "De druidas totêmicos a guerreiros ferozes, os pictos são um povo de paixões intensas e espiritualidade profunda. Protegem a natureza e celebram os antigos.",
    origin: "Confederação das tribos da Floresta Uivante",
    traits: ["Animismo", "Culto aos Ancestrais", "Resistência", "Guerrilha"],
    abilities: ["Druidismo", "Lobos de Lucardis", "Medicina Herbal"],
    icon: Leaf,
    color: "from-green-600 to-emerald-600",
  },
  {
    name: "Cazares",
    description:
      "Nômades, domadores de cavalos. Guerreiros implacáveis que veneram o Céu Eterno. Respeitam a força e a ardilosidade. Punem as quebras de laços de forma brutal.",
    origin: "Nômades das vastas estepes de Balmut",
    traits: ["Tengrismo", "Coragem", "Durabilidade", "Mestres Equestres"],
    abilities: ["Xamanismo", "Arqueiros Montados", "Canto Difônico"],
    icon: Swords,
    color: "from-zinc-600 to-gray-600",
  },
  {
    name: "Nordes",
    description:
      "Escultores de runas, saqueadores de povos e detentores das sagas épicas. Coletam thralls para tarefas servis. A dureza do inverno molda o espírito norde.",
    origin: "Bravos guerreiros do norte gélido",
    traits: ["Ásatrú", "Pilhagens", "Vikings", "Skalds"],
    abilities: ["Magia Rúnica", "Berserkers", "Navegações"],
    icon: Mountain,
    color: "from-blue-500 to-blue-600",
  },
];

export default function Folks() {
  return (
    <div className="bg-stone-950 min-h-screen">
      <HeroSection
        title="Os Povos Livres"
        subtitle="Conheça os diversos povos que habitam o continente de Partha"
      />

      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16 parchment rounded-3xl p-12 mx-4 shadow-2xl border-4 border-amber-600/30">
          <h2 className="text-4xl md:text-5xl font-bold text-stone-800 mb-6 font-cinzel">
            Os Povos do Velho Mundo
          </h2>
          <p className="text-lg md:text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed font-sans font-semibold">
            Os povos de Partha são vários, e suas crenças são diversas. Descubra
            mais sobre seus costumes, ambições e modos de lidar com o mundo que
            os rodeia
          </p>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">
          {folks.map((folk, index) => {
            const Icon = folk.icon;
            return (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-2xl hover:shadow-amber-600/25 transition-all duration-500 border-2 border-amber-600/30 bg-stone-900 h-full rounded-3xl group stone-texture"
              >
                <CardHeader className="pb-6 p-8 border-b border-amber-600/20">
                  <div className="flex items-center space-x-4 mb-4">
                    <div
                      className={`p-4 rounded-full bg-gradient-to-r ${folk.color} group-hover:scale-110 transition-transform duration-300 border-2 border-white/30`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-amber-300 text-xl font-cinzel">
                        {folk.name}
                      </CardTitle>
                      <CardDescription className="text-stone-400 text-sm font-medium font-sans">
                        {folk.origin}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 px-8 pb-8">
                  <p className="text-stone-300 leading-relaxed font-sans">
                    {folk.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-amber-300 mb-3 font-cinzel">
                      Traços Culturais
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {folk.traits.map((trait, traitIndex) => (
                        <Badge
                          key={traitIndex}
                          variant="secondary"
                          className="text-xs bg-amber-900/30 text-amber-300 border-amber-400/50 px-3 py-1 font-sans"
                        >
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-amber-300 mb-3 font-cinzel">
                      Características Especiais
                    </h4>
                    <ul className="text-sm text-stone-300 space-y-2">
                      {folk.abilities.map((ability, abilityIndex) => (
                        <li
                          key={abilityIndex}
                          className="flex items-center font-sans"
                        >
                          <div className="w-2 h-2 bg-amber-500 rounded-full mr-3 flex-shrink-0" />
                          {ability}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Information */}
        <section className="mt-20 relative rounded-3xl p-12 text-amber-50 overflow-hidden stone-texture border-4 border-amber-600/30 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-800/80 via-stone-900/90 to-amber-900/20"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold text-center mb-10 font-cinzel text-amber-200 glow-text">
              Escreva Sua Lenda
            </h3>
            <div className="grid md:grid-cols-2 gap-10">
              <div>
                <h4 className="text-xl font-semibold mb-4 font-cinzel text-amber-300">
                  Escolha Seu Povo
                </h4>
                <p className="text-stone-300 mb-4 leading-relaxed font-sans">
                  Seu povo determina não apenas as habilidades de seu
                  personagem, mas também seu lugar no mundo, suas tradições
                  sagradas e as histórias que precedem sua jornada. Cada povo
                  tem suas prioridades, valores e modos de vida.
                </p>
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-4 font-cinzel text-amber-300">
                  Encare Seu Destino
                </h4>
                <p className="text-stone-300 mb-4 leading-relaxed font-sans">
                  Seu destino é moldado por escolhas e ações. Enfrente os
                  desafios que surgirem no caminho e lembre-se de que cada
                  decisão tem suas consequências. A jornada de um herói é
                  repleta de provações, mas também de oportunidades para crescer
                  e deixar sua marca no mundo.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
