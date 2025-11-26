import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Icon from "@/components/ui/icon";

const Index = () => {
  const whatsappNumber = "79516004875";
  const whatsappMessage = encodeURIComponent("Хочу купить книгу 'Гормоны'");

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary/30">
      <section className="container mx-auto px-4 py-20 md:py-32 animate-fade-in">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
              Ваше тело уже имеет инструкцию. Пора научиться её читать.
            </h1>
            <p className="text-xl text-muted-foreground">
              Научный бестселлер, который перевернет ваше представление о здоровье, силе воли и настроении
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="text-lg px-8 py-6 transition-transform hover:scale-105">
                <Icon name="ShoppingCart" size={20} className="mr-2" />
                Купить за 200 ₽
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="text-lg px-8 py-6 transition-transform hover:scale-105"
                onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
          <div className="relative animate-scale-in">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <img 
              src="https://cdn.poehali.dev/projects/cd3c92db-abd6-4a6c-9b8d-e61c590232ac/files/7fec3781-1ff8-4663-8de4-2ba875e308e1.jpg" 
              alt="Книга Гормоны" 
              className="relative rounded-3xl shadow-2xl w-full hover:scale-105 transition-transform duration-300"
            />
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">О книге</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Вы устали от борьбы с собственным телом? Диеты не работают, стресс управляет вами, а энергия на нуле?
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Microscope" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Научная база</h3>
                <p className="text-muted-foreground">Основано на последних исследованиях эндокринологии</p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="Lightbulb" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Практические инструменты</h3>
                <p className="text-muted-foreground">Простые техники вместо сложных медицинских терминов</p>
              </CardContent>
            </Card>

            <Card className="transition-all hover:shadow-lg hover:-translate-y-1">
              <CardContent className="p-6 space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="TrendingUp" size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold">Реальные результаты</h3>
                <p className="text-muted-foreground">От борьбы с собой к осознанному управлению здоровьем</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground">Что вы узнаете из книги</h2>
            </div>

            <div className="grid gap-6 mt-12">
              <Card className="transition-all hover:shadow-lg">
                <CardContent className="p-6 grid md:grid-cols-[auto_1fr] gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔥</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Энергия и аппетит</h3>
                    <p className="text-muted-foreground">Почему сила воли бессильна против грелина и лептина. Как разорвать порочный круг переедания</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardContent className="p-6 grid md:grid-cols-[auto_1fr] gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">😰</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Стресс и психика</h3>
                    <p className="text-muted-foreground">Как укротить кортизол и превратить его из врага в союзника. Дыхательные техники для мгновенного снятия напряжения</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardContent className="p-6 grid md:grid-cols-[auto_1fr] gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">💤</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Сон и ритмы</h3>
                    <p className="text-muted-foreground">Почему мелатонин — ваш главный ночной целитель. Как наладить сон без таблеток</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardContent className="p-6 grid md:grid-cols-[auto_1fr] gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-rose-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Любовь и привязанность</h3>
                    <p className="text-muted-foreground">Химия отношений: дофамин, окситоцин и вазопрессин. Почему страсть проходит и что приходит ей на смену</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardContent className="p-6 grid md:grid-cols-[auto_1fr] gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🧠</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Мозг и настроение</h3>
                    <p className="text-muted-foreground">Как гормоны щитовидной железы влияют на «туман в голове». Почему тревожность — это не только «плохие мысли»</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="transition-all hover:shadow-lg">
                <CardContent className="p-6 grid md:grid-cols-[auto_1fr] gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-2xl">🔄</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Половые гормоны</h3>
                    <p className="text-muted-foreground">Эстроген и тестостерон — не только про размножение, но и про энергию, метаболизм и молодость</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-3xl p-8 md:p-12 border border-primary/20">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white text-4xl font-bold flex-shrink-0">
                АР
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold text-foreground">Об авторе</h2>
                <h3 className="text-xl font-semibold text-primary">Андрей Равинских</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Основатель студии здоровья «Благодать», исследователь и автор-составитель этой книги. 
                  Специализируется на оздоровительных практиках, мастерски превращает сложные научные данные 
                  в понятные инструкции к собственному телу.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl border-primary/20">
              <CardContent className="p-8 md:p-12 text-center space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Цифровая версия книги</h2>
                <div className="space-y-2">
                  <div className="text-5xl md:text-6xl font-bold text-primary">200 ₽</div>
                  <p className="text-muted-foreground">PDF формат · Доступ сразу после оплаты</p>
                </div>
                
                <div className="space-y-3 pt-4">
                  <Button size="lg" className="w-full text-lg py-6 transition-transform hover:scale-105">
                    <Icon name="ShoppingCart" size={20} className="mr-2" />
                    Купить за 200 ₽
                  </Button>
                  
                  <Button 
                    size="lg" 
                    variant="outline" 
                    className="w-full text-lg py-6 transition-transform hover:scale-105 border-2 border-primary/30 hover:bg-primary/5"
                    onClick={() => window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank')}
                  >
                    <Icon name="MessageCircle" size={20} className="mr-2" />
                    Купить в WhatsApp
                  </Button>
                </div>

                <div className="flex items-center justify-center gap-6 pt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Icon name="Zap" size={16} className="text-primary" />
                    <span>Мгновенная доставка</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Lock" size={16} className="text-primary" />
                    <span>Безопасная оплата</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground">Частые вопросы</h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                В каком формате книга?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Книга доступна в формате PDF. Вы сможете читать её на любом устройстве: смартфоне, планшете, компьютере или электронной книге.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Как получить книгу после оплаты?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Сразу после оплаты вы получите ссылку на скачивание книги на указанную электронную почту. Также ссылка будет доступна в личном кабинете.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Можно ли вернуть деньги?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Да, если книга не оправдала ваших ожиданий в течение 7 дней после покупки, мы вернём вам полную стоимость. Просто напишите нам в WhatsApp.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Для кого эта книга?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Книга написана для всех, кто хочет лучше понимать своё тело. Вам не нужно медицинское образование — всё объясняется простым языком с практическими примерами.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="border rounded-lg px-6 bg-card">
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                Заменяет ли книга консультацию врача?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                Нет, информация в книге не заменяет медицинскую консультацию. Перед применением любых рекомендаций обязательно проконсультируйтесь со специалистом.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      <section className="bg-secondary/50 py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Остались вопросы?</h2>
            <p className="text-xl text-muted-foreground">
              Напишите нам в WhatsApp — мы ответим в течение 5 минут и поможем с покупкой!
            </p>
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 transition-transform hover:scale-105"
              onClick={() => window.open(`https://wa.me/${whatsappNumber}`, '_blank')}
            >
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Написать в WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground/5 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Андрей Равинских. Все права защищены.
            </p>
            <p className="text-xs text-muted-foreground">
              ⚠️ Информация в книге не заменяет консультацию врача. Перед применением рекомендаций проконсультируйтесь со специалистом.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
