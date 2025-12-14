import { Injectable } from '@angular/core';
import { Sector } from '../model/sector.model';

@Injectable({
  providedIn: 'root'
})
export class SectorsService {

  getSectors(): Sector[] {
    return [
      {
        id: 1,
        name: 'قطاع الشؤون الأكاديمية',
        description: 'مسؤول عن الإشراف على جميع البرامج الأكاديمية، وتطوير المناهج، وضمان جودة التعليم داخل كلية الفنون الجميلة.',
        imageUrl: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-book',
        establishedYear: 1995,
        vision: 'أن يكون قطاعًا أكاديميًا رائدًا يضمن التميز في تعليم الفنون الجميلة ويعزز أساليب التدريس المبتكرة.',
        mission: 'تقديم إشراف أكاديمي شامل، وتطوير مناهج متقدمة، والحفاظ على أعلى معايير التعليم الفني.',
        objectives: [
          'تطوير وتحديث المناهج الأكاديمية بما يتوافق مع المعايير الدولية',
          'ضمان جودة جميع البرامج التعليمية',
          'تنسيق الأنشطة الأكاديمية بين جميع الأقسام',
          'تعزيز البحث العلمي والأنشطة الأكاديمية',
          'تعزيز التعاون مع المؤسسات الأكاديمية الدولية'
        ],
        headOfSector: {
          name: 'أ.د. أحمد حسن',
          title: 'وكيل الكلية لشؤون التعليم والطلاب',
          academicRank: 'أستاذ',
          specialization: 'تربية فنية وتطوير مناهج',
          email: 'ahmed.hassan@finearts.luxor.edu.eg',
          office: 'مبنى الشؤون الأكاديمية، غرفة 201',
          bio: 'يمتلك أ.د. أحمد حسن أكثر من 20 عامًا من الخبرة في التعليم الفني وتطوير المناهج، وله العديد من الأبحاث المنشورة حول أساليب التدريس المبتكرة في الفنون.'
        },
        staffMembers: [
          {
            id: 1,
            name: 'د. فاطمة الزهراء',
            academicRank: 'أستاذ مشارك',
            specialization: 'علم النفس التربوي',
            division: 'التخطيط الأكاديمي',
            email: 'fatima.alzahra@finearts.luxor.edu.eg',
            office: 'غرفة 203'
          },
          {
            id: 2,
            name: 'د. محمد صالح',
            academicRank: 'أستاذ مساعد',
            specialization: 'ضمان الجودة',
            division: 'مراقبة الجودة',
            email: 'mohamed.saleh@finearts.luxor.edu.eg',
            office: 'غرفة 205'
          },
          {
            id: 3,
            name: 'أ. نادية إبراهيم',
            academicRank: 'مدرس',
            specialization: 'الإدارة الأكاديمية',
            division: 'التخطيط الأكاديمي',
            email: 'nadia.ibrahim@finearts.luxor.edu.eg',
            office: 'غرفة 207'
          }
        ],
        divisions: ['التخطيط الأكاديمي', 'مراقبة الجودة', 'تطوير المناهج', 'تنسيق البحوث'],
        services: [
          'تطوير البرامج الأكاديمية',
          'متابعة ضمان الجودة',
          'برامج تنمية أعضاء هيئة التدريس',
          'تنسيق البحوث',
          'التعاون الدولي'
        ],
        activities: [
          'اجتماعات المراجعة السنوية للمناهج',
          'ورش تدريب لأعضاء هيئة التدريس',
          'مراجعات الجودة الأكاديمية',
          'ندوات بحثية',
          'برامج التبادل الدولي'
        ]
      },
      {
        id: 2,
        name: 'قطاع شؤون الطلاب',
        description: 'مكرس لدعم حياة الطلاب ورفاهيتهم والأنشطة اللامنهجية لضمان تجربة تعليمية متكاملة.',
        imageUrl: 'https://images.pexels.com/photos/1438081/pexels-photo-1438081.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-users',
        establishedYear: 1996,
        vision: 'خلق بيئة داعمة وغنية تعزز نمو الطلاب وإبداعهم وتطورهم الشخصي.',
        mission: 'دعم الطلاب طوال رحلتهم الأكاديمية من خلال تقديم خدمات وأنشطة وإرشاد شامل.',
        objectives: [
          'تقديم خدمات دعم طلابي شاملة',
          'تنظيم الأنشطة الثقافية والفنية',
          'دعم الأندية الطلابية',
          'تسهيل برامج الرعاية الطلابية',
          'تعزيز مهارات القيادة لدى الطلاب'
        ],
        headOfSector: {
          name: 'د. أميرة فاروق',
          title: 'وكيل الكلية لشؤون الطلاب',
          academicRank: 'أستاذ مشارك',
          specialization: 'علم نفس الطلاب والإرشاد',
          email: 'amira.farouk@finearts.luxor.edu.eg',
          office: 'مبنى شؤون الطلاب، غرفة 101',
          bio: 'تتخصص د. أميرة فاروق في علم نفس الطلاب، ولها دور بارز في تطوير برامج دعم الطلاب داخل الكلية.'
        },
        staffMembers: [
          {
            id: 4,
            name: 'أ. عمر محمود',
            academicRank: 'مدرس',
            specialization: 'الأنشطة الطلابية',
            division: 'تنسيق الأنشطة',
            email: 'omar.mahmoud@finearts.luxor.edu.eg',
            office: 'غرفة 103'
          },
          {
            id: 5,
            name: 'أ. ليلى أحمد',
            academicRank: 'معيد',
            specialization: 'الإرشاد الطلابي',
            division: 'دعم الطلاب',
            email: 'layla.ahmed@finearts.luxor.edu.eg',
            office: 'غرفة 105'
          },
          {
            id: 6,
            name: 'أ. خالد ناصر',
            academicRank: 'مدرس',
            specialization: 'المنظمات الطلابية',
            division: 'الأندية الطلابية',
            email: 'khaled.nasser@finearts.luxor.edu.eg',
            office: 'غرفة 107'
          }
        ],
        divisions: ['تنسيق الأنشطة', 'دعم الطلاب', 'الأندية الطلابية', 'خدمات الرعاية'],
        services: [
          'الإرشاد والدعم الطلابي',
          'الفعاليات الثقافية والفنية',
          'تنسيق الأندية الطلابية',
          'برامج الرعاية والدعم',
          'تنمية مهارات القيادة'
        ],
        activities: [
          'المهرجان الفني السنوي',
          'معارض الطلاب',
          'برامج التبادل الثقافي',
          'ورش القيادة',
          'مشاريع خدمة المجتمع'
        ]
      },
      {
        id: 3,
        name: 'قطاع الدراسات العليا والبحوث',
        description: 'يركز على تعزيز المبادرات البحثية، ودعم برامج الدراسات العليا، وتشجيع الابتكار في تعليم الفنون الجميلة.',
        imageUrl: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        icon: 'pi pi-search',
        establishedYear: 2000,
        vision: 'ترسيخ مكانة الكلية كمركز رائد للبحث في الفنون الجميلة والدراسات الإبداعية في المنطقة.',
        mission: 'تعزيز التميز البحثي، ودعم التعليم العالي، وتشجيع الابتكار في الممارسات الفنية.',
        objectives: [
          'تطوير ودعم البرامج البحثية في الفنون الجميلة',
          'الإشراف على برامج الدراسات العليا',
          'تسهيل التعاون البحثي',
          'تشجيع نشر الأبحاث العلمية',
          'دعم المشاريع الفنية البحثية المبتكرة'
        ],
        headOfSector: {
          name: 'أ.د. محمود الشريف',
          title: 'وكيل الكلية للدراسات العليا والبحوث',
          academicRank: 'أستاذ',
          specialization: 'تاريخ الفن ومنهجية البحث',
          email: 'mahmoud.elsharif@finearts.luxor.edu.eg',
          office: 'مبنى البحوث، غرفة 301',
          bio: 'يُعد أ.د. محمود الشريف من أبرز مؤرخي الفن، وله خبرة واسعة في منهجيات البحث والإشراف على رسائل الدراسات العليا.'
        },
        staffMembers: [
          {
            id: 7,
            name: 'د. ياسمين عبد الرحمن',
            academicRank: 'أستاذ مشارك',
            specialization: 'منهجية البحث',
            division: 'تنسيق البحوث',
            email: 'yasmin.abdelrahman@finearts.luxor.edu.eg',
            office: 'غرفة 303'
          },
          {
            id: 8,
            name: 'د. حسن علي',
            academicRank: 'أستاذ مساعد',
            specialization: 'الدراسات العليا',
            division: 'برامج الدراسات العليا',
            email: 'hassan.ali@finearts.luxor.edu.eg',
            office: 'غرفة 305'
          },
          {
            id: 9,
            name: 'أ. رانيا مصطفى',
            academicRank: 'مدرس',
            specialization: 'إدارة البحوث',
            division: 'دعم البحوث',
            email: 'rania.mostafa@finearts.luxor.edu.eg',
            office: 'غرفة 307'
          }
        ],
        divisions: ['تنسيق البحوث', 'برامج الدراسات العليا', 'دعم البحوث', 'خدمات النشر'],
        services: [
          'تنسيق المشاريع البحثية',
          'إدارة برامج الدراسات العليا',
          'دعم تمويل البحوث',
          'المساعدة في النشر العلمي',
          'تنظيم المؤتمرات'
        ],
        activities: [
          'المؤتمر البحثي السنوي',
          'مناقشات رسائل الدراسات العليا',
          'ورش منهجية البحث',
          'التعاون البحثي الدولي',
          'مبادرات النشر العلمي'
        ]
      }
    ];
  }

  getSectorById(id: number): Sector | undefined {
    return this.getSectors().find(sector => sector.id === id);
  }
}
