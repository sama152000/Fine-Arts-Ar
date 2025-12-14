
import { Injectable } from '@angular/core';
import { Department, DepartmentTab } from '../model/department.model';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  private departments: Department[] = [
    {
      id: 1,
      name: "قسم الديكور",
      description: "يركز قسم الديكور على تطوير المهارات الإبداعية والتقنية في العمارة الداخلية والديكور المسرحي، لإعداد طلاب قادرين على تحويل المساحات إلى تجارب فنية مبتكرة.",
      vision: "أن يصبح قسم الديكور قسمًا رائدًا في فنون الديكور، معترفًا به إقليميًا ودوليًا لتميزه في التعليم والبحث والممارسة المهنية في العمارة الداخلية والديكور المسرحي.",
      mission: "تقديم خدمات تعليمية وبحثية عالية الجودة وفقًا للمعايير الدولية، لإعداد خريجين قادرين على المنافسة محليًا وعالميًا كمصممين مثقفين ومتميزين فنيًا في مجالي العمارة الداخلية والديكور المسرحي.",
      objectives: [
        "تطوير المهارات الإبداعية والتقنية في التصميم الداخلي والديكور المسرحي",
        "تعزيز فهم السياقات الثقافية والتاريخية في الممارسة التصميمية",
        "تعزيز مبادئ التصميم المستدام والوعي البيئي",
        "تشجيع الابتكار في تطبيق الأساليب التقليدية والمعاصرة",
        "بناء شراكات قوية مع الصناعة للتدريب العملي وفرص التوظيف"
      ],
      imageUrl: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg",
      icon: "pi pi-home",
      studentCount: 245,
      programsOffered: ["بكالوريوس العمارة الداخلية", "بكالوريوس الديكور المسرحي"],
      divisions: ["العمارة الداخلية", "الفنون التعبيرية (السينوغرافيا والديكور المسرحي)"],
      headOfDepartment: {
        name: "أ.م.د. داليا صالح عبد الوهاب فرح",
        title: "رئيس قسم الديكور",
        academicRank: "أستاذ مشارك",
        specialization: "الفنون التعبيرية",
        email: "d.farah@fine.arts.edu.eg",
        office: "المبنى A، غرفة 201",
        bio: "د. داليا فرح خبيرة معروفة في التصميم المسرحي والسينوغرافيا ولديها أكثر من 15 عامًا من الخبرة الأكاديمية."
      },
      staffMembers: [
        { id: 1, name: "أ.م.د. داليا صالح فرح", specialization: "الفنون التعبيرية", academicRank: "أستاذ مشارك", division: "الديكور المسرحي" },
        { id: 2, name: "أ.م.د. عمرو عبد العاطي محمد", specialization: "العمارة الداخلية", academicRank: "أستاذ مشارك", division: "العمارة الداخلية" },
        { id: 3, name: "أ.م.د. قرشي سعدي أحمد", specialization: "الفنون التعبيرية", academicRank: "أستاذ مشارك", division: "الديكور المسرحي" },
        { id: 4, name: "د. رشا جابر أيوب واصف", specialization: "العمارة الداخلية", academicRank: "مدرس", division: "العمارة الداخلية" },
        { id: 5, name: "د. علياء ماهر محمد حمدان", specialization: "الفنون التعبيرية", academicRank: "مدرس", division: "الديكور المسرحي" },
        { id: 6, name: "د. ثروت عبد اللطيف عوض", specialization: "الفنون التعبيرية", academicRank: "مدرس", division: "الديكور المسرحي" },
        { id: 7, name: "د. محمود عبد الحميد محمود", specialization: "العمارة الداخلية", academicRank: "مدرس", division: "العمارة الداخلية" },
        { id: 8, name: "د. جهاد محمد حامد شريت", specialization: "العمارة الداخلية", academicRank: "مدرس", division: "العمارة الداخلية" },
        { id: 9, name: "د. علياء كامل عبد الناصر", specialization: "العمارة الداخلية", academicRank: "مدرس", division: "العمارة الداخلية" },
        { id: 10, name: "د. محمد يونس فكري عامر", specialization: "العمارة الداخلية", academicRank: "مدرس", division: "العمارة الداخلية" },
        { id: 11, name: "د. منى سعد محمد محمود", specialization: "الفنون التعبيرية", academicRank: "مدرس", division: "الديكور المسرحي" },
        { id: 12, name: "د. مرام محمود ثابت", specialization: "العمارة الداخلية", academicRank: "مدرس", division: "العمارة الداخلية" },
        { id: 13, name: "م.م. مها عبد الستار عباس", specialization: "العمارة الداخلية", academicRank: "معيد", division: "العمارة الداخلية" },
        { id: 14, name: "م.م. محمد عوض يعقوب", specialization: "العمارة الداخلية", academicRank: "معيد", division: "العمارة الداخلية" },
        { id: 15, name: "م.م. عبد الله البكري درغام", specialization: "العمارة الداخلية", academicRank: "معيد", division: "العمارة الداخلية" },
        { id: 16, name: "م.م. شعبان محمد خضري", specialization: "العمارة الداخلية", academicRank: "معيد", division: "العمارة الداخلية" },
        { id: 17, name: "معيد كريم عبد السلام بكري", specialization: "الفنون التعبيرية", academicRank: "معيد", division: "الديكور المسرحي" },
        { id: 18, name: "معيد أبانوب عادل شنودة", specialization: "العمارة الداخلية", academicRank: "معيد", division: "العمارة الداخلية" },
        { id: 19, name: "معيد جيرمين جرجس نسيم", specialization: "الفنون التعبيرية", academicRank: "معيد", division: "الديكور المسرحي" },
        { id: 20, name: "معيد ندى علاء سيد", specialization: "العمارة الداخلية", academicRank: "معيد", division: "العمارة الداخلية" },
        { id: 21, name: "معيد أحمد عنتر محمود", specialization: "الفنون التعبيرية", academicRank: "معيد", division: "الديكور المسرحي" },
        { id: 22, name: "معيد ميرنا بدوي سيد", specialization: "العمارة الداخلية", academicRank: "معيد", division: "العمارة الداخلية" }
      ],
      establishedYear: 1996,
      detailsUrl: "/departments/1"
    },

    {
      id: 2,
      name: "قسم الجرافيك",
      description: "يختص قسم الجرافيك بالاتصال البصري والتصميم الجرافيكي والوسائط الرقمية، ويُعد الطلاب ليصبحوا مصممين مبتكرين في عالم التصميم الحديث.",
      vision: "أن يكون مركزًا رائدًا في تعليم التصميم الجرافيكي، قادرًا على تخريج محترفين مبدعين يواجهون تحديات الاتصال البصري المعاصر بحلول تصميمية مبتكرة.",
      mission: "باعتباره أحد الأقسام الرئيسية بالكلية، يهدف إلى تخريج طلاب ذوي مهارات عالية في التصميم الجرافيكي، من خلال برامج أكاديمية قوية تجمع بين المبادئ الفنية التقليدية والتقنيات الرقمية الحديثة.",
      objectives: [
        "تطوير مهارات متقدمة في التصميم الجرافيكي والطباعة والاتصال البصري",
        "إتقان أدوات التصميم الرقمي والتقنيات الحديثة في إنتاج الوسائط",
        "فهم تطوير الهوية البصرية واستراتيجيات الاتصال التسويقي",
        "استكشاف الأساليب التقليدية والمعاصرة في فنون الكتاب والرسوم المتحركة",
        "تعزيز التفكير النقدي في حل المشكلات البصرية والتعبير الإبداعي"
      ],
      imageUrl: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg",
      icon: "pi pi-image",
      studentCount: 312,
      programsOffered: ["بكالوريوس التصميم الجرافيكي", "بكالوريوس الرسوم المتحركة وفنون الكتاب"],
      divisions: ["التصميم الطباعي (الجرافيك والإعلان)", "الرسوم المتحركة وفنون الكتاب"],
      headOfDepartment: {
        name: "أ.د. أحمد محيي حمزة",
        title: "رئيس قسم الجرافيك",
        academicRank: "أستاذ",
        specialization: "التصميم الطباعي",
        email: "a.hamza@fine.arts.edu.eg",
        office: "المبنى B، غرفة 301",
        bio: "أ.د. أحمد حمزة خبير متميز في التصميم الجرافيكي والاتصال البصري وله خبرة واسعة في المجالين الأكاديمي والمهني."
      },
      staffMembers: [
        { id: 1, name: "أ.د. صالح محمد عبد المعطي", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "أستاذ متفرغ", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 2, name: "أ.د. أحمد محيي حمزة", specialization: "التصميم الطباعي", academicRank: "أستاذ", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 3, name: "أ.م.د. وليد محمد عبد الله", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "أستاذ مشارك", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 4, name: "أ.م.د. أحمد حسن محمود", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "أستاذ مشارك", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 5, name: "أ.م.د. محمود مصطفى علام", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "أستاذ مشارك", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 6, name: "أ.م.د. وفاء عبد المقصود يونس", specialization: "التصميم الطباعي", academicRank: "أستاذ مشارك", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 7, name: "أ.م.د. أحمد جمال عيد", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "أستاذ مشارك", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 8, name: "أ.م.د. أحمد حمدي عبد الحارس", specialization: "التصميم الطباعي", academicRank: "أستاذ مشارك", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 9, name: "د. سماح محمد عبد الحميد", specialization: "التصميم الطباعي", academicRank: "مدرس", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 10, name: "د. أحمد محمد سمير", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "مدرس", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 11, name: "د. دعاء أحمد الصاوي", specialization: "التصميم الطباعي", academicRank: "مدرس", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 12, name: "د. ريهام محيي الدين", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "مدرس", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 13, name: "د. أحمد الضوي حسن", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "مدرس", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 14, name: "د. جهاد أحمد محمد", specialization: "التصميم الطباعي", academicRank: "مدرس", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 15, name: "د. وليد محمد عبد الستار", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "مدرس", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 16, name: "د. الشيماء السيد بغدادي", specialization: "التصميم الطباعي", academicRank: "مدرس", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 17, name: "د. أحمد صابر عبد الظاهر", specialization: "التصميم الطباعي", academicRank: "مدرس", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 18, name: "د. رحاب محمد الطيب", specialization: "التصميم الطباعي", academicRank: "مدرس", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 19, name: "م.م. فايزة أبو الحسن", specialization: "التصميم الطباعي", academicRank: "معيد", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 20, name: "م.م. طه فتحي عقل", specialization: "التصميم الطباعي", academicRank: "معيد", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 21, name: "م.م. سمر محمد عباس", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "معيد", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 22, name: "م.م. علي جمال علي", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "معيد", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 23, name: "م.م. أماني عثمان عبد الباسط", specialization: "التصميم الطباعي", academicRank: "معيد", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 24, name: "م.م. إسراء صالح عبد المعطي", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "معيد", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 25, name: "م.م. محمد جمال إسماعيل", specialization: "التصميم الطباعي", academicRank: "معيد", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 26, name: "معيد علي أحمد رضوان", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "معيد", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 27, name: "معيد إسراء منصور يوسف", specialization: "التصميم الطباعي", academicRank: "معيد", division: "التصميم الطباعي (الجرافيك والإعلان)" },
        { id: 28, name: "معيد أبانوب عادل كامل", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "معيد", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 29, name: "معيد شيماء شاذلي حسنين", specialization: "الرسوم المتحركة وفنون الكتاب", academicRank: "معيد", division: "الرسوم المتحركة وفنون الكتاب" },
        { id: 30, name: "معيد مارجو عوض صبحي", specialization: "التصميم الطباعي", academicRank: "معيد", division: "التصميم الطباعي (الجرافيك والإعلان)" }
      ],
      establishedYear: 1996,
      detailsUrl: "/departments/2"
    },

    {
      id: 3,
      name: "قسم التصوير",
      description: "يركز قسم التصوير على تطوير التعبير الفني من خلال تقنيات الرسم التقليدية والمعاصرة، مع تعزيز الرؤية الإبداعية والمهارة التقنية.",
      vision: "أن يصبح مركزًا متميزًا لفنون التصوير، يعمل على تنمية المواهب الإبداعية والمساهمة في الحفاظ على التراث الفني المصري وتطويره مع مواكبة الحركات الفنية المعاصرة.",
      mission: "تقديم تعليم أكاديمي وبحثي في مجال التصوير وفقًا لمعايير الجودة الدولية، لإعداد خريجين متميزين قادرين على الإسهام في التطور الثقافي والفني في مصر والمنطقة.",
      objectives: [
        "إتقان تقنيات ومواد التصوير التقليدية والمعاصرة",
        "تطوير رؤية فنية شخصية وقدرات تعبيرية مبتكرة",
        "فهم تاريخ الفن وتأثيره على الممارسات المعاصرة",
        "استكشاف تقنيات التصوير الجداري للدمج المعماري",
        "تعزيز التحليل النقدي وتقدير الفنون البصرية"
      ],
      imageUrl: "https://images.pexels.com/photos/1560932/pexels-photo-1560932.jpeg",
      icon: "pi pi-palette",
      studentCount: 198,
      programsOffered: ["بكالوريوس التصوير", "بكالوريوس التصوير الجداري"],
      divisions: ["التصوير", "التصوير الجداري"],
      headOfDepartment: {
        name: "أ.م.د. مروة عزت عبد الحميد",
        title: "رئيس قسم التصوير",
        academicRank: "أستاذ مشارك",
        specialization: "التصوير",
        email: "m.ezzat@fine.arts.edu.eg",
        office: "المبنى C، غرفة 201",
        bio: "د. مروة عزت فنانة وأكاديمية متميزة تمتلك خبرة واسعة في تقنيات التصوير المعاصر وأساليب التدريس الفني."
      },
      staffMembers: [
        { id: 1, name: "أ.م.د. علي سيد عبده", specialization: "التصوير", academicRank: "أستاذ مشارك", division: "التصوير" },
        { id: 2, name: "أ.م.د. مروة عزت عبد الحميد", specialization: "التصوير", academicRank: "أستاذ مشارك", division: "التصوير" },
        { id: 3, name: "أ.م.د. منال محمد مبارك", specialization: "التصوير الجداري", academicRank: "أستاذ مشارك", division: "التصوير الجداري" },
        { id: 4, name: "د. علاء أبو الحمد عبد الستار", specialization: "التصوير", academicRank: "مدرس", division: "التصوير" },
        { id: 5, name: "د. عبد الرحيم حكيم حسن", specialization: "التصوير الجداري", academicRank: "مدرس", division: "التصوير الجداري" },
        { id: 6, name: "د. محمود محمد عبد الحفيظ", specialization: "التصوير", academicRank: "مدرس", division: "التصوير" },
        { id: 7, name: "د. سمير عبد الرازق الشعراوي", specialization: "التصوير الجداري", academicRank: "مدرس", division: "التصوير الجداري" },
        { id: 8, name: "د. علاء أحمد عوض", specialization: "التصوير الجداري", academicRank: "مدرس", division: "التصوير الجداري" },
        { id: 9, name: "م.م. محمود محمد سليمان", specialization: "التصوير الجداري", academicRank: "معيد", division: "التصوير الجداري" },
        { id: 10, name: "م.م. شذى خالد موسى", specialization: "التصوير", academicRank: "معيد", division: "التصوير" },
        { id: 11, name: "م.م. علياء الطيب محمد", specialization: "التصوير", academicRank: "معيد", division: "التصوير" },
        { id: 12, name: "م.م. أحمد عبد الفتاح يوسف", specialization: "التصوير", academicRank: "معيد", division: "التصوير" },
        { id: 13, name: "معيد هالة محمد رفعي", specialization: "التصوير", academicRank: "معيد", division: "التصوير" },
        { id: 14, name: "معيد سارية فتحي فولي", specialization: "التصوير", academicRank: "معيد", division: "التصوير" },
        { id: 15, name: "معيد صالح محمد سنوسي", specialization: "التصوير", academicRank: "معيد", division: "التصوير" },
        { id: 16, name: "معيد ياسمين علي محمود", specialization: "التصوير الجداري", academicRank: "معيد", division: "التصوير الجداري" },
        { id: 17, name: "معيد ناجي أحمد حسين", specialization: "التصوير", academicRank: "معيد", division: "التصوير" },
        { id: 18, name: "معيد مصطفى سيف النصر", specialization: "التصوير", academicRank: "معيد", division: "التصوير" },
        { id: 19, name: "معيد فيلوباتير حليم غطاس", specialization: "التصوير", academicRank: "معيد", division: "التصوير" },
        { id: 20, name: "معيد فيرونيكا سمح جرجس", specialization: "التصوير الجداري", academicRank: "معيد", division: "التصوير الجداري" },
        { id: 21, name: "معيد موني حسن بدران", specialization: "التصوير الجداري", academicRank: "معيد", division: "التصوير الجداري" }
      ],
      establishedYear: 1996,
      detailsUrl: "/departments/3"
    },
    {
      id: 4,
      name: "قسم النحت",
      description: "يعمل قسم النحت على تطوير التعبير الفني ثلاثي الأبعاد من خلال تقنيات النحت التقليدية والمعاصرة، لإعداد طلاب قادرين على إنتاج أعمال فنية مؤثرة للمساحات الثقافية والعامة.",
      vision: "أن يصبح مركزًا رائدًا في تعليم فنون النحت، قادرًا على تخريج نحاتين مبتكرين يساهمون في إثراء التراث النحتي المصري مع مواكبة الاتجاهات الفنية المعاصرة.",
      mission: "تخريج نحاتين متميزين ومبدعين من خلال إنتاج أعمال نحتية للمؤسسات الوطنية والثقافية والاجتماعية والاستثمارية والسياحية، والمشاركة في المعارض الفنية المحلية والدولية التي تُبرز تميز الفن النحتي المصري.",
      objectives: [
        "إتقان تقنيات ومواد النحت التقليدية والمعاصرة",
        "تطوير مهارات النحت البيئي ونحت الفراغات العامة",
        "فهم العلاقة بين النحت والمساحات المعمارية",
        "استكشاف تقنيات النحت البارز وصناعة الميداليات",
        "تعزيز تقدير التراث النحتي والابتكارات المعاصرة"
      ],
      imageUrl: "https://images.pexels.com/photos/1193942/pexels-photo-1193942.jpeg",
      icon: "pi pi-th-large",
      studentCount: 156,
      programsOffered: ["بكالوريوس النحت", "بكالوريوس فنون البارز والميداليات"],
      divisions: ["النحت القائم والبيئي", "النحت البارز والميداليات"],
      headOfDepartment: {
        name: "أ.د. هشام تهامي إدريس المعداوي",
        title: "رئيس قسم النحت",
        academicRank: "أستاذ",
        specialization: "فن الميداليات والنحت البارز",
        email: "h.tahami@fine.arts.edu.eg",
        office: "المبنى D، غرفة 101",
        bio: "أ.د. هشام المعداوي نحات بارز متخصص في فن الميداليات والنحت البارز وله إسهامات دولية في تطوير الفن النحتي المصري."
      },
      staffMembers: [
        { id: 1, name: "أ.د. هشام تهامي المعداوي", specialization: "النحت البارز والميداليات", academicRank: "أستاذ", division: "النحت البارز والميداليات" },
        { id: 2, name: "أ.م.د. يوسف محمود إبراهيم", specialization: "النحت البارز والميداليات", academicRank: "أستاذ مشارك", division: "النحت البارز والميداليات" },
        { id: 3, name: "أ.م.د. رمضان عبد المعتمد", specialization: "النحت القائم والبيئي", academicRank: "أستاذ مشارك", division: "النحت القائم والبيئي" },
        { id: 4, name: "أ.م.د. عصمت محمد صادق", specialization: "النحت البارز والميداليات", academicRank: "أستاذ مشارك", division: "النحت البارز والميداليات" },
        { id: 5, name: "أ.م.د. صلاح شعبان حسنين", specialization: "النحت البارز والميداليات", academicRank: "أستاذ مشارك", division: "النحت البارز والميداليات" },
        { id: 6, name: "أ.م.د. هيثم عامر محمود", specialization: "النحت القائم والبيئي", academicRank: "أستاذ مشارك", division: "النحت القائم والبيئي" },
        { id: 7, name: "د. إبراهيم محمد منصور", specialization: "النحت القائم والبيئي", academicRank: "مدرس", division: "النحت القائم والبيئي" },
        { id: 8, name: "د. سلوى سيد الطاهر", specialization: "النحت البارز والميداليات", academicRank: "مدرس", division: "النحت البارز والميداليات" },
        { id: 9, name: "د. سارة منصور محمود", specialization: "النحت القائم والبيئي", academicRank: "مدرس", division: "النحت القائم والبيئي" },
        { id: 10, name: "د. رحمة محمود أحمد", specialization: "النحت البارز والميداليات", academicRank: "مدرس", division: "النحت البارز والميداليات" },
        { id: 11, name: "م.م. أسماء عتيتو مسكين", specialization: "النحت البارز والميداليات", academicRank: "معيد", division: "النحت البارز والميداليات" },
        { id: 12, name: "م.م. حامد محمد حامد", specialization: "النحت القائم والبيئي", academicRank: "معيد", division: "النحت القائم والبيئي" },
        { id: 13, name: "معيد أسماء أحمد إبراهيم", specialization: "النحت القائم والبيئي", academicRank: "معيد", division: "النحت القائم والبيئي" },
        { id: 14, name: "معيد غادة أيمن البستاوي", specialization: "النحت البارز والميداليات", academicRank: "معيد", division: "النحت البارز والميداليات" },
        { id: 15, name: "معيد الزهراء محمد نجيب", specialization: "النحت القائم والبيئي", academicRank: "معيد", division: "النحت القائم والبيئي" },
        { id: 16, name: "معيد محمد سعيد حسن", specialization: "النحت القائم والبيئي", academicRank: "معيد", division: "النحت القائم والبيئي" }
      ],
      establishedYear: 1996,
      detailsUrl: "/departments/4"
    }
  ];

  getDepartmentTabs(): DepartmentTab[] {
    return [
      { id: 'overview', label: 'نبذه عامة', icon: 'pi pi-info-circle', active: true },
      { id: 'vision-mission', label: 'الرؤية & الرسالة', icon: 'pi pi-eye', active: false },
      { id: 'head', label: 'رئيس القسم ', icon: 'pi pi-user', active: false },
      { id: 'staff', label: 'اعضاء القسم', icon: 'pi pi-users', active: false }
    ];
  }

  getDepartments(): Department[] {
    return this.departments.map(dept => ({
      ...dept,
      detailsUrl: `/departments/${dept.id}`
    }));
  }

  getDepartmentById(id: number): Department | undefined {
    return this.departments.find(dept => dept.id === id);
  }

  getDepartmentByName(name: string): Department | undefined {
    return this.departments.find(dept => 
      dept.name.toLowerCase().includes(name.toLowerCase())
    );
  }





}