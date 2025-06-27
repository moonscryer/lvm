import HeroSection from "@/components/ui/hero-section";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Shield, Users, Scroll, Swords, Crown, Wand } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-stone-950">
      <HeroSection
        title="Lendas do Velho Mundo"
        subtitle="Embarque em jornadas épicas no mundo de Partha, onde lendas são forjadas em sangue e aventureiros buscam glória eterna"
      >
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-500 hover:to-amber-400 text-stone-900 px-10 py-4 text-lg font-normal shadow-xl shadow-amber-600/25 font-sans border-2 border-amber-400 hover:border-amber-300 transition-all duration-300"
          >
            <Link href="/reinos">Explore os Reinos</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-amber-600/50 text-amber-200 hover:bg-amber-600/10 hover:text-amber-100 hover:border-amber-400 px-10 py-4 text-lg font-normal font-sans transition-all duration-300 bg-stone-800/50"
          >
            <Link href="/povos">Conheça os Povos</Link>
          </Button>
        </div>
      </HeroSection>

      <div className="container mx-auto px-4 py-20">
        {/* Introduction */}
        <section className="text-center mb-20 parchment rounded-3xl p-12 mx-4 shadow-2xl border-4 border-amber-600/30">
          <h2 className="text-4xl md:text-6xl font-bold text-stone-800 mb-8 font-cinzel">
            Um Mundo de Mistérios Ancestrais
          </h2>
          <p className="text-lg md:text-xl text-stone-700 max-w-4xl mx-auto leading-relaxed font-sans font-semibold">
            Diz-se que, na Era dos Heróis, os deuses caminhavam entre os
            mortais. Agora, aventureiros traçam seus destinos com espada,
            coragem e magia. Seja bem-vindo(a) a um mundo repleto de segredos a
            desvendar e tesouros a conquistar, onde cada escolha ecoa através
            das eras.
          </p>
        </section>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="group hover:shadow-2xl hover:shadow-amber-600/25 transition-all duration-500 bg-stone-900 border-2 border-amber-600/30 hover:border-amber-500/50 rounded-2xl overflow-hidden stone-texture">
            <CardHeader className="text-center p-8 border-b border-amber-600/20">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-600/20 to-amber-700/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-amber-600/40">
                <Shield className="h-10 w-10 text-amber-400" />
              </div>
              <CardTitle className="text-amber-200 text-2xl font-cinzel mb-2">
                Grandes Reinos
              </CardTitle>
              <CardDescription className="text-stone-400 text-lg font-sans">
                Descubra os domínios que compõem Partha
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center p-8">
              <p className="text-stone-300 mb-6 leading-relaxed font-sans">
                Do norte gélido de Trondheim até os vulcões do Império Wazif,
                cada reino possui uma diversidade de belezas a contemplar e
                perigos a superar.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:border-amber-300 px-6 font-sans font-normal bg-stone-800/30"
              >
                <Link href="/reinos">Explore os Reinos</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl hover:shadow-amber-600/25 transition-all duration-500 bg-stone-900 border-2 border-amber-600/30 hover:border-amber-500/50 rounded-2xl overflow-hidden stone-texture">
            <CardHeader className="text-center p-8 border-b border-amber-600/20">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-600/20 to-amber-700/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-amber-600/40">
                <Users className="h-10 w-10 text-amber-400" />
              </div>
              <CardTitle className="text-amber-200 text-2xl font-cinzel mb-2">
                Povos Diversos
              </CardTitle>
              <CardDescription className="text-stone-400 text-lg font-sans">
                Conheça os povos e suas culturas
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center p-8">
              <p className="text-stone-300 mb-6 leading-relaxed font-sans">
                Cada povo traz suas próprias tradições, lendas e habilidades.
                Toda cultura tem seus estereótipos, mas também suas nuances.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:border-amber-300 px-6 font-sans font-normal bg-stone-800/30"
              >
                <Link href="/povos">Conheça os Povos</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group hover:shadow-2xl hover:shadow-amber-600/25 transition-all duration-500 bg-stone-900 border-2 border-amber-600/30 hover:border-amber-500/50 rounded-2xl overflow-hidden stone-texture">
            <CardHeader className="text-center p-8 border-b border-amber-600/20">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-600/20 to-amber-700/30 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border-2 border-amber-600/40">
                <Scroll className="h-10 w-10 text-amber-400" />
              </div>
              <CardTitle className="text-amber-200 text-2xl font-cinzel mb-2">
                Crônicas Registradas
              </CardTitle>
              <CardDescription className="text-stone-400 text-lg font-sans">
                Descubra os eventos que moldaram este mundo
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center p-8">
              <p className="text-stone-300 mb-6 leading-relaxed font-sans">
                Através dos séculos, a história do mundo foi passada de geração
                a geração, seja através da tradição oral, ou de pergaminhos
                delicados de outrora.
              </p>
              <Button
                asChild
                variant="outline"
                className="border-amber-400/50 text-amber-400 hover:bg-amber-400/10 hover:border-amber-300 px-6 font-sans font-normal bg-stone-800/30"
              >
                <Link href="/historia">Leia as Crônicas</Link>
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Game Features */}
        <section className="relative rounded-3xl p-12 text-amber-50 overflow-hidden stone-texture border-4 border-amber-600/30 shadow-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-stone-800/80 via-stone-900/90 to-amber-900/20"></div>

          <div className="relative z-10">
            <h3 className="text-4xl md:text-5xl font-bold text-center mb-12 font-cinzel text-amber-200 glow-text">
              Aventuras Épicas Aguardam
            </h3>
            <div className="grid md:grid-cols-3 gap-10">
              <div className="text-center group">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-red-800/30 to-red-900/40 rounded-full flex items-center justify-center mb-6 group-hover:bg-red-700/40 transition-colors duration-300 border-2 border-red-600/40">
                  <Swords className="h-10 w-10 text-red-400" />
                </div>
                <h4 className="text-2xl font-semibold mb-4 font-cinzel text-red-300">
                  Guerra na Era do Bronze
                </h4>
                <p className="text-stone-300 leading-relaxed font-sans text-lg">
                  Lute por glória, fortuna, ou por um ideal, e conquiste seu
                  espaço neste mundo repleto de perigos
                </p>
              </div>
              <div className="text-center group">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-amber-700/30 to-amber-800/40 rounded-full flex items-center justify-center mb-6 group-hover:bg-amber-600/40 transition-colors duration-300 border-2 border-amber-600/40">
                  <Crown className="h-10 w-10 text-amber-400" />
                </div>
                <h4 className="text-2xl font-semibold mb-4 font-cinzel text-amber-300">
                  Intrigas Reais
                </h4>
                <p className="text-stone-300 leading-relaxed font-sans text-lg">
                  Navegue pelas traiçoeiras políticas das cortes, forje alianças
                  e molde o destino dos reinos
                </p>
              </div>
              <div className="text-center group">
                <div className="mx-auto w-20 h-20 bg-gradient-to-br from-purple-600/30 to-purple-700/40 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple-500/40 transition-colors duration-300 border-2 border-purple-500/40">
                  <Wand className="h-10 w-10 text-purple-400" />
                </div>
                <h4 className="text-2xl font-semibold mb-4 font-cinzel text-purple-300">
                  Jornadas Místicas
                </h4>
                <p className="text-stone-300 leading-relaxed font-sans text-lg">
                  Encontre artefatos poderosos, desvende mistérios antigos, mas
                  não mexa com aquilo que não entende
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
